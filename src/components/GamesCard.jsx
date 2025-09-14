import { useEffect, useState } from "react";
// import data from "../data/db";

// const { db } = data;

const GamesCard = () => {
  const [db, setDb] = useState([]);

  const KEY = "ecc44a0015a645d8933c0cd1069cf024";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const req = await fetch(`https://api.rawg.io/api/games?key=${KEY}`);
        const data = await req.json();
        setDb(data.results);
        console.log(data.results);
      } catch (error) {
        console.error("Failed to fetch games:", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl uppercase text-white font-bold">All Games</h2>
      <div className="grid grid-cols-5 gap-8 py-10">
        {db.map((item) => {
          const { id, name, rating, released, background_image, genres, platforms } = item;
          return (
            <div className="bg-slate-700 overflow-hidden rounded-2xl h-80 flex flex-col" key={id}>
              <img
                className="w-full h-40 object-cover"
                src={background_image}
                alt={name}
              />
              <div className="py-2 px-4 flex-1 flex flex-col justify-between gap-2">
                <h3 className="text-white text-sm">{name}</h3>
                <p className="text-slate-200 font-ubuntu text-xs">Released: <span>{released.split("-").reverse().join(".")}</span></p>
                <p className="text-slate-400 text-xs">
                  {genres.map((genre) => genre.name).join(", ")}
                </p>
                <span className="desc text-slate-400 text-xs">
                  {
                    platforms.map((platform) => platform.platform.name).join(", ")
                  }
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
