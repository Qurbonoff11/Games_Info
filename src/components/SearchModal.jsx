import { TrophySpin } from "react-loading-indicators";

const SearchModal = ({ searchResults, loader }) => {
  return (
    <div className="w-full h-full fixed left-0 bg-black/20 z-40 backdrop-blur-sm">
      <div className="absolute container font-ubuntu grid grid-cols-5 justify-center gap-5 p-6 h-[820px] bg-slate-800 top-[28rem] rounded-2xl left-[50%] translate-[-50%] overflow-y-auto z-50">
        {loader ? (
          <div className="w-full h-full flex justify-center items-center col-span-5">
            <TrophySpin color="#0090ff" size="large" />
          </div>
        ) : (
          searchResults.map((game) => {
            const { id, name, background_image, genres } = game;

            return (
              <div
                className="w-full h-[230px] flex flex-col bg-slate-700 rounded-tr-2xl rounded-2xl overflow-hidden"
                key={id}
              >
                <div className="w-full h-2/3 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={background_image}
                    alt={name}
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center ml-4">
                  <h4 className="text-slate-200">{name}</h4>
                  <p className="text-slate-400">
                    {genres.map((genre) => genre.name).join(", ")}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SearchModal;
