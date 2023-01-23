const TitleContainer = ({ albumTitle, albumOwner }) => {
  return (
    <div className="mb-6 p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700">
      <h1 className="font-semibold text-3xl mb-5">{albumOwner}</h1>
      <h2 className="font-semibold text-xl">{albumTitle}</h2>
    </div>
  );
};

export default TitleContainer;
