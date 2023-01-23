import { useQuery } from "react-query";
import makeRequest from "../../utils/fetch";

const fetchData = async (url) => {
  return await makeRequest({ endpoint: url });
};

export const useFetchAlbum = (page, currentPage) => {
  return useQuery(
    ["fetchAlbum", page, currentPage],
    () =>
      fetchData(
        `https://jsonplaceholder.typicode.com/albums?_start=${
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

export const useFetchAllAlbum = () => {
  return useQuery(
    "fetchAlbum",
    () => fetchData(`https://jsonplaceholder.typicode.com/albums`),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );
};

export const useFetchUser = () => {
  return useQuery(
    "fetchUser",
    () => fetchData(`https://jsonplaceholder.typicode.com/users`),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );
};
