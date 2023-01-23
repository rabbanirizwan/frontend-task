import { screen, render } from "@testing-library/react";
import AlbumContainer from "../components/album/albumContainer";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { routesConfig } from "../App";
import { server } from "../setupTests";
import { rest } from "msw";

describe("albumContainer", () => {
  test("it should show shimmer card when we do not have data", async () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <RouterProvider router={routesConfig}>
          <AlbumContainer />
        </RouterProvider>
      </QueryClientProvider>
    );

    expect(await screen.findByTestId(/shimmer-card/i)).toBeInTheDocument();
  });
  test("if the user is fetched it should display author name , album name", async () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <RouterProvider router={routesConfig}>
          <AlbumContainer />
        </RouterProvider>
      </QueryClientProvider>
    );

    expect(await screen.findAllByText(/Leanne Graham/i)).toHaveLength(10);
    expect(
      await screen.findByText(/sunt qui excepturi placeat culpa/i)
    ).toBeInTheDocument();
  });
});

describe("when network fail", () => {
  test("if there is failed in network it should display message", async () => {
    const handlers = [
      rest.get(
        "https://jsonplaceholder.typicode.com/albums",
        (req, res, ctx) => {
          return res(
            ctx.status(500),
            ctx.json(null)
          );
        }
      ),
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.networkError());
        }
      ),
    ];
    server.resetHandlers(...handlers);

    render(
      <QueryClientProvider
        client={
          new QueryClient({
            defaultOptions: {
              queries: {
                // ✅ turns retries off
                retry: false,
              },
            },
          })
        }
      >
        <RouterProvider router={routesConfig}>
          <AlbumContainer />
        </RouterProvider>
      </QueryClientProvider>
    );

    expect(await screen.findByText(/not able to fetch/i)).toBeInTheDocument();
  });
});
