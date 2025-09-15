import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import SliderCard from "../components/SliderCard.jsx";
import GamesCard from "../components/GamesCard.jsx";
import { useEffect, useState } from "react";

const Store = () => {
  const [db, setDb] = useState([]);

  const KEY = "ecc44a0015a645d8933c0cd1069cf024";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const req = await fetch(
          `https://api.rawg.io/api/games?key=${KEY}&page_size=40`
        );
        const data = await req.json();
        setDb(data.results);
      } catch (error) {
        console.error("Failed to fetch games:", error);
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
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            className="mySwiper w-full h-[600px] rounded-2xl"
          >
            {db
              .filter((item) => item.rating >= 4.5)
              .map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <SliderCard {...item} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
        <GamesCard db={db} />
      </div>
    </section>
  );
};

export default Store;
