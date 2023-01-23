import {
  screen,
  render,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import PhotoContainer from "../components/photo/photoContainer";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { rest } from "msw";
import { server } from "../setupTests";

const fakeRouter = createMemoryRouter(
  [
    {
      path: "/photo-page/5/LeanneGraham/eaqueautomnisa",
      element: <PhotoContainer />,
      params: {
        id: "5",
        authorName: "LeanneGraham",
        albumbName: "eaqueautomnisa",
      },
    },
  ],
  { initialEntries: ["/photo-page/5/LeanneGraham/eaqueautomnisa"] }
);

describe("PhotoContainer", () => {
  test("should fetch the photos of almum if fetch successfully", async () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <RouterProvider router={fakeRouter}>
          <PhotoContainer />
        </RouterProvider>
      </QueryClientProvider>
    );

    expect(
      await screen.findByText(/beatae est vel tenetur/i)
    ).toBeInTheDocument();
  });
  test("if there is failed in network it should display message", async () => {
    const handlers = [
      rest.get(
        "https://jsonplaceholder.typicode.com/photos",
        (req, res, ctx) => {
          return res(ctx.status(500), ctx.json(null));
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
        <RouterProvider router={fakeRouter}>
          <PhotoContainer />
        </RouterProvider>
      </QueryClientProvider>
    );

    expect(await screen.findByText(/not able to fetch/i)).toBeInTheDocument();
  });

  test("it should open modal onclick", async () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <RouterProvider router={fakeRouter}>
          <PhotoContainer />
        </RouterProvider>
      </QueryClientProvider>
    );
    const card = await screen.findByText(/beatae est vel tenetur/i);

    fireEvent.click(card);
    expect(await screen.findByTestId("photo-modal")).toBeInTheDocument();
  });
});

describe("pagination test", () => {
  test("initially first page should be active", async () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <RouterProvider router={fakeRouter}>
          <PhotoContainer />
        </RouterProvider>
      </QueryClientProvider>
    );
    expect(await screen.findByTestId(1)).toHaveClass("bg-blue-500");
  });

  test("second button should be active on click and first should not be active", async () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <RouterProvider router={fakeRouter}>
          <PhotoContainer />
        </RouterProvider>
      </QueryClientProvider>
    );

    const buttonTwo = await screen.findByTestId(2);

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.click(buttonTwo);
    });

    await waitFor(async () => {
      expect(await screen.findByTestId(2)).toHaveClass("bg-blue-500");
    });

    await waitFor(async () => {
      expect(await screen.findByTestId(1)).not.toHaveClass("bg-blue-500");
    });
  });
});
