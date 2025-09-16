// import data from "../data/db";

import CardsLoader from "./CardsLoader";

// const { db } = data;

const GamesCard = ({ db, loader }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl uppercase text-white font-bold">All Games</h2>
      <div className="grid grid-cols-5 gap-8 py-10">
        {loader
          ? new Array(20).fill(0).map((_, index) => {
            return (
              <CardsLoader key={index}/>
            )
          })
          : db.map((item) => {
              const {
                id,
                name,
                rating,
                released,
                background_image,
                genres,
                platforms,
              } = item;
              return (
                <div
                  className="bg-slate-700 overflow-hidden rounded-2xl h-80 flex flex-col"
                  key={id}
                >
                  <img
                    className="w-full h-40 object-cover"
                    src={background_image}
                    alt={name}
                  />
                  <div className="py-2 px-4 flex-1 flex flex-col justify-between gap-2">
                    <h3 className="text-white text-sm">{name}</h3>
                    <p className="text-slate-200 font-ubuntu text-xs">
                      Released:{" "}
                      <span>{released.split("-").reverse().join(".")}</span>
                    </p>
                    <p className="text-slate-400 text-xs">
                      {genres.map((genre) => genre.name).join(", ")}
                    </p>
                    <span className="desc text-slate-400 text-xs">
                      {platforms
                        .map((platform) => platform.platform.name)
                        .join(", ")}
                    </span>
                    <span className="text-white text-xs">
                      {`Rating: ${rating}`}
                    </span>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default GamesCard;
