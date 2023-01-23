import { useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerCard from "../common/cardShimmer";
import { useFetchAlbumPhotos, useFetchAllAlbumPhotos } from "./request";
import PhotoCard from "./components/photoCard";
import Pagination from "../common/pagination";
import Paginate from "../common/paginate";

import ErrorHandling from "../common/ErrorHandling";

const PhotoContainer = () => {
  const { id, authorName, albumName } = useParams();
  const [page, setPage] = useState(20);

  const [currentPage, setCurrentPage] = useState(1);
  const {
    isLoading,
    isSuccess,
    isError,
    data: photos,
  } = useFetchAlbumPhotos(page, currentPage, id);
  const { data: allPhotos } = useFetchAllAlbumPhotos(id);

  const handlePagination = (val) => {
    setPage(val);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      {isLoading && <ShimmerCard />}
      {isError && <ErrorHandling />}
      {isSuccess && (
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
       
          <PhotoCard
            cardInfo={photos}
            authorName={authorName}
            albumName={albumName}
          />

          <div className="flex flex-row-reverse justify-between mt-8 items-center">
            <Pagination handlePagination={handlePagination} page={page} />
            <p className="text-sm text-gray-700">
              <span className="font-medium px-1">
                {allPhotos?.length} results
              </span>
            </p>
            <Paginate
              data={allPhotos}
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

export default PhotoContainer;
