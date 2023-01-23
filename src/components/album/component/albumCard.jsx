import React from "react";
import { Card } from "../../common";
import { Link } from "react-router-dom";

const AlbumCard = ({ albums, users }) => {
  const userColors = {};
  return (
    <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {albums?.map((album) => {
        const user = users?.find((user) => user.id === album.userId);
        if (!userColors[user?.id]) {
          userColors[user?.id] = `https://via.placeholder.com/150/${Math.floor(
            Math.random() * 16777215
          ).toString(16)}`;
        }

        const aval = { ...album, ...user, userColors };
        return (
          <div
            key={album.id}
            className="my-2 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1"
          >
            <Link
              to={`photo-page/${album.id}/${user?.name}/${album.title}`}
              className="cursor-pointer"
            >
              <Card {...aval} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AlbumCard;
