import { useQuery } from "react-query";
import makeRequest from "../../utils/fetch";

const fetchData = async (url) => {
  return await makeRequest({ endpoint: url });
};

export const useFetchAlbumPhotos = (page, currentPage, albumId) => {
  return useQuery(
    ["fetchAlbumPhoto", page, currentPage],
    () =>
      fetchData(
        `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}&_start=${
          (currentPage - 1) * page
        }&_limit=${page}`
      ),
    {
      variables: [page, currentPage],
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );
};

export const useFetchAllAlbumPhotos = (albumId) => {
  return useQuery(
    ["useFetchAllAlbumPhotos", albumId],
    () =>
      fetchData(
        `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
      ),
    {
      variables: [albumId],
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );
};
