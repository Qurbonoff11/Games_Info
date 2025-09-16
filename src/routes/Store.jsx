import GamesCard from "../components/GamesCard.jsx";
import { useEffect, useState } from "react";
import SwipperBanner from "../components/SwipperBanner.jsx";

const Store = () => {
  const [db, setDb] = useState([]);
  const [loading, setLoading] = useState(true);

  const API = "https://api.rawg.io/api/games?key="
  const KEY = "ecc44a0015a645d8933c0cd1069cf024";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const req = await fetch(
          `${API}${KEY}&page_size=20`
        );
        const data = await req.json();
        setDb(data.results);
      } catch (error) {
        console.error("Failed to fetch games:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <section className="w-full h-full bg-slate-950">
      <div className="container mx-auto">
        <div className="flex items-center justify-center flex-col gap-8 py-10">
          <h1 className="text-3xl text-white uppercase font-bold tracking-wider">
            Calabrites
          </h1>
          <SwipperBanner db={db} loader={loading}/>
        </div>
        <GamesCard db={db} loader={loading}/>
      </div>
    </section>
  );
};

export default Store;
