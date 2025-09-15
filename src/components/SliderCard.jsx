const SliderCard = ({ background_image, name, rating}) => {
  return (
    <>
      {rating && (
        <div className="swiper-slide bg-slate-950 rounded-2xl overflow-hidden">
          <img src={background_image} alt={name} className="w-full h-full object-cover" />
          <div className="flex items-center justify-between absolute bottom-0 bg-linear-[to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.6),rgba(0,0,0,0.8),rgba(0,0,0,1)] py-5 px-4 w-full z-[1000]">
            <h2 className="text-slate-100 text-2xl font-bold">
              {name.toUpperCase()}
            </h2>
            <p className="text-slate-100 font-bold">
              {`Rating: ${rating}`}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default SliderCard;
