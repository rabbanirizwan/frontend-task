import React, { useState } from "react";
import Pagination from "../common/pagination";
import Paginate from "../common/paginate";
import ShimmerCard from "../common/cardShimmer";

import { useFetchAlbum, useFetchUser, useFetchAllAlbum } from "./request";
import AlbumCard from "./component/albumCard";
import ErrorHandling from "../common/ErrorHandling";

const AlbumContainer = () => {
  const [page, setPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: albums,
    isSuccess: isAlbumSuccess,
    isError: isAlbumError,
    isLoading: isAlbumLoading,
  } = useFetchAlbum(page, currentPage);
  const { data: allAlbums } = useFetchAllAlbum();
  const {
    data: users,
    isSuccess: isUserSuccess,
    isError: isUerError,
    isLoading: isUserLoading,
  } = useFetchUser();

  const handlePagination = (val) => {
    setPage(val);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      {(isAlbumLoading || isUserLoading) && <ShimmerCard />}
      {(isAlbumError || isUerError) && <ErrorHandling />}
      {(isAlbumSuccess && isUserSuccess) && (
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <AlbumCard albums={albums} users={users} />
          <div className="flex flex-row-reverse justify-between mt-8 items-center	">
            <Pagination handlePagination={handlePagination} page={page} />

            <p className="text-sm text-gray-700">
              <span className="font-medium px-1">{allAlbums?.length} results</span>
            </p>
            <Paginate
              data={allAlbums}
              itemsPerPage={page}
              handlePageChange={handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AlbumContainer;
