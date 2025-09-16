const SearchModal = ({searchResults}) => {
  return (
    <div className="absolute container flex gap-y-5 py-5 px-6 flex-col w-full bg-slate-800 max-h-[600px] top-[22.7rem] left-[50%] translate-[-50%] overflow-y-auto z-50">
      {searchResults.map((game) => {
        const { id, name, background_image, genres } = game;

        return (
          <div className="w-full flex" key={id}>
            <div className="w-1/4 h-40">
              <img className="w-full h-full object-cover" src={background_image} alt={name} />
            </div>
            <div className="flex flex-1 flex-col justify-center ml-4">
              <h4>{name}</h4>
              <p>{genres.map((genre) => genre.name).join(", ")}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchModal;
