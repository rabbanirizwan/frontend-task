const Card = (props) => {
  const { title, name, userId, albumId, thumbnailUrl, setPhoto, userColors } =
    props;

  let imageUrl = albumId ? thumbnailUrl : userColors[userId];

  const handleClick = () => {
    albumId && setPhoto(props);
  };
  return (
    <>
      <figure onClick={handleClick}>
        <img
          src={imageUrl}
          alt="cardimage"
          className="rounded-t h-72 w-full object-cover"
        />

        <figcaption className="p-4">
          <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">
            {albumId ? title: name}
          </p>

         {!albumId && <small className="leading-5 text-gray-500 dark:text-gray-400">
            {title}
          </small>}
        </figcaption>
      </figure>
    </>
  );
};

export default Card;
