import { render, screen } from "@testing-library/react";
import AlbumCard from "../components/album/component/albumCard";
import { mockAlbums, mockUsers } from "./mockData";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import { routesConfig } from "../App";

describe("Album Card", () => {
  it("should display album name and user name", async () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <RouterProvider router={routesConfig}>
          <AlbumCard albums={mockAlbums} users={mockUsers} />
        </RouterProvider>
      </QueryClientProvider>
    );

    expect(
      await screen.findByText("quidem molestiae enim")
    ).toBeInTheDocument();

    expect(
        await screen.findAllByText("Leanne Graham")
      ).toHaveLength(10);

    
  });
});
