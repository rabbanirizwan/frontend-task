import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import ErrorPage from "./components/error/ErrorPage";
import AlbumContainer from "./components/album/albumContainer";
import PhotoContainer from "./components/photo/photoContainer";

const queryClient = new QueryClient();

export const routesConfig = createBrowserRouter([
  {
    path: "/",
    element: <AlbumContainer />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/photo-page/:id/:authorName/:albumName",
    element: <PhotoContainer />,
  },
]);

const Root = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={routesConfig} />
  </QueryClientProvider>
);

export default Root;
