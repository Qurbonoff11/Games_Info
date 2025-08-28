import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Home = () => {
  const db = [
    {
      id: 1,
      img: "https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2014/11/gtav-featured.jpg",
      title: "Grand Theft Auto V",
      year: 2013,
      storage: 120,
    },
    {
      id: 2,
      img: "https://gaming-cdn.com/images/products/13664/orig/counter-strike-2-pc-game-steam-cover.jpg?v=1695885435",
      title: "Counter Strike 2",
      year: 2023,
    },
    {
      id: 3,
      img: "https://toping.uz/storage/articles/6597/vbCTlDgiLfaOXFKRwqyhrboLs32Sj4o8.webp",
      title: "DOTA 2",
      year: 2022,
    },
  ];

  return (
    <section className="w-full h-full bg-slate-950">
      <div className="container mx-auto">
        <div className="flex items-center justify-center py-8">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper w-2/4 rounded-2xl"
          >
            {db.map((movie) => (
              <SwiperSlide
                key={movie.id}
                className="w-full h-full bg-slate-800 overflow-hidden rounded-2xl"
              >
                <img
                  src={movie.img}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Home;
