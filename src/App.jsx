import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import ErrorPage from "./components/error/ErrorPage";
import { ShimmerCard } from "./components/common";
const AlbumContainer = lazy(() => import("./components/album/albumContainer"));
const PhotoContainer = lazy(() => import("./components/photo/photoContainer"));

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
    <Suspense fallback={<ShimmerCard />}>
      <RouterProvider router={routesConfig} />
    </Suspense>
  </QueryClientProvider>
);

export default Root;
