import { rest } from "msw";
import { mockAlbums, mockPhotos, mockUsers } from "./mockData";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockUsers));
  }),

  rest.get("https://jsonplaceholder.typicode.com/albums", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockAlbums));
  }),

  rest.get("https://jsonplaceholder.typicode.com/photos", (req, res, ctx) => {
    const params = new URLSearchParams(req.url.search);
    params.get("albumId");
    return res(ctx.status(200), ctx.json(mockPhotos));
  }),
];
