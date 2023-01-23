import { render, screen } from "@testing-library/react";
import PhotoCard from "../components/photo/components/photoCard";
import { mockPhotos } from "./mockData";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import { routesConfig } from "../App";

describe("Album Card", () => {
  it("should display album name and user name", async () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <RouterProvider router={routesConfig}>
          <PhotoCard
            cardInfo={mockPhotos}
            authorName="Leanne Graham"
            albumName="quidem molestiae enim"
          />
        </RouterProvider>
      </QueryClientProvider>
    );

    expect(
      await screen.findByText("quidem molestiae enim")
    ).toBeInTheDocument();
  });
});
