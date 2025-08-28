import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SliderCard from "../components/SliderCard.jsx";
import data from "../data/db.js";

const { db } = data;

const Store = () => {
  return (
    <section className="w-full h-full bg-slate-950">
      <div className="container mx-auto">
        <div className="flex items-center justify-center flex-col gap-8 py-8">
          <h1 className="text-3xl text-white uppercase font-bold tracking-wider">
            Calabrites
          </h1>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
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
        <div></div>
      </div>
    </section>
  );
};

export default Store;
