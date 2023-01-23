import { useState } from "react";
import PhotoDetailModal from "./photoDetailModal";
import { Card, TitleContainer } from "../../common";

const PhotoCard = ({ cardInfo, albumName, authorName }) => {
  const [currentPhoto, setCurrentPhoto] = useState(null);

  const setPhoto = (photo) => {
    setCurrentPhoto(photo);
  };

  return (
    <div>
      <TitleContainer albumTitle={albumName} albumOwner={authorName} />
      <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {cardInfo?.map((val) => {
          return (
            <div
              key={val.id}
              className="my-2 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1"
            >
              <Card
                {...val}
                name={albumName}
                authorName={authorName}
                setPhoto={setPhoto}
              />
            </div>
          );
        })}
      </div>

      {currentPhoto && (
        <PhotoDetailModal
          photo={currentPhoto}
          onClose={() => setCurrentPhoto(null)}
        />
      )}
    </div>
  );
};

export default PhotoCard;
