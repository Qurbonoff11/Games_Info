import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SliderCard from "../components/SliderCard.jsx";
import data from "../data/db.js";
import { BsSearch } from "react-icons/bs";

const { db } = data;

const Store = () => {
  return (
    <section className="w-full h-full bg-slate-950">
      <div className="container mx-auto">
        <div className="w-full">
          <div className="w-2/4 overflow-hidden flex items-center justify-between mx-auto py-1.5 px-3 border-[2px] border-slate-700 rounded-2xl">
            <input
              type="text"
              placeholder="Search..."
              className="placeholder:text-slate-700 flex-1 outline-0 text-slate-400 text-xl"
            />
            <button className="text-slate-400 text-xl cursor-pointer duration-300 hover:text-blue-400">
              <BsSearch />
            </button>
          </div>
        </div>
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
      </div>
    </section>
  );
};

export default Store;
