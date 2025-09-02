import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import SliderCard from "../components/SliderCard.jsx";
import data from "../data/db.js";
import GamesCard from "../components/gamesCard.jsx";

const { db } = data;

const Store = () => {
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
            className="mySwiper w-2/4 h-[430px] rounded-2xl"
          >
            {db
              .filter((item) => item.calabrites)
              .map((item) => (
                <SwiperSlide key={item.id}>
                  <SliderCard {...item} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <GamesCard />
      </div>
    </section>
  );
};

export default Store;
