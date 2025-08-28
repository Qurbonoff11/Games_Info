import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Home = () => {
  const db = [
    {
      id: 1342,
      img: "https://i.ytimg.com/vi/__2bjWbetsA/maxresdefault.jpg",
      title: "Venom 2",
      year: 1994,
    },
    {
      id: 1342,
      img: "https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/86716f5c-6ebe-4af0-b5ae-e10cf134661b/c4d99e28-7a24-40ff-94e3-e262cca34195/1280x720/match/image.jpg",
      title: "Spider-Man 2",
      year: 1994,
    },
    {
      id: 1342,
      img: "https://i.ytimg.com/vi/bN7ksFEVO9U/maxresdefault.jpg",
      title: "Lucy",
      year: 1994,
    },
  ];

  return (
    <section className="w-full h-full bg-slate-950">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
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
            className="mySwiper w-full h-[50rem] rounded-2xl my-8"
          >
            {db.map((movie) => (
              <SwiperSlide key={movie.id} className="w-full h-full bg-slate-800 flex justify-center items-center">
                
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
