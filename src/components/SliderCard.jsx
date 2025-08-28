const SliderCard = ({ img, title, price, calabrites }) => {
  return (
    <>
      {calabrites && (
        <div className="swiper-slide bg-slate-950 rounded-md overflow-hidden">
          <img src={img} alt={title} className="w-full h-full object-cover" />
          <div className="flex items-center justify-between absolute bottom-0 bg-linear-[to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.6),rgba(0,0,0,0.8),rgba(0,0,0,1)] py-5 px-4 w-full z-[1000]">
            <h2 className="text-blue-500 text-2xl font-bold">{title.toUpperCase()}</h2>
            <p className="text-blue-500 font-bold">{price === `Free` ? `Free` : `$${price}`}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SliderCard;
