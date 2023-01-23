import { screen, render } from "@testing-library/react";
import AlbumContainer from "../components/album/albumContainer";
import ErrorPage from "../components/error/ErrorPage";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const fakeRouter = createMemoryRouter(
    [
      {
        path: "/",
        element: <AlbumContainer />,
        errorElement: <ErrorPage />,
      },
    ],
    { initialEntries: ["/sdsd"] }
  );
  
  describe("ErrorPage", () => {
    test("if user end enter wrong path", async () => {
      render(
        <QueryClientProvider client={new QueryClient()}>
          <RouterProvider router={fakeRouter}>
            <AlbumContainer />
          </RouterProvider>
        </QueryClientProvider>
      );
  
      expect(screen.getByText(/Page does not exit/i)).toBeInTheDocument();
    });
  });