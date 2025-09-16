import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import SliderCard from "../components/SliderCard.jsx";

const SwipperBanner = ({ db, loader }) => {
  return (
    <>
      {loader ? (
        <div className="w-full h-[600px] bg-slate-700 rounded-2xl animate-pulse"></div>
      ) : (
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
      )}
    </>
  );
};

export default SwipperBanner;
