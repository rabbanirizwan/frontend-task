const PhotoDetailModal = ({ photo, onClose }) => {
  return (
    <>
      {photo && (
        <div
          data-testid="photo-modal"
          className="modal fixed top-0 left-0 h-full w-full flex items-center justify-center p-4 bg-black-50  "
        >
          <div className="relative bg-white rounded-md overflow-hidden ">
            <div className="flex flex-row">
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full object-cover h-80"
              />
              <div className="px-4 py-2 my-auto w-96 ">
                <div className="text-md font-medium w-72">
                  Photo: {photo.title}
                </div>
                <div className="text-gray-600 mt-1">
                  Owner: {photo.authorName}
                </div>
                <div className="text-gray-600 mt-1">Album: {photo.name}</div>
              </div>
            </div>

            <button
              className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700"
              onClick={() => onClose()}
            >
              x
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoDetailModal;
