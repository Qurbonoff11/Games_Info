import data from "../data/db";

const { db } = data;

const GamesCard = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl uppercase text-white font-bold">All Games</h2>
      <div className="grid grid-cols-5 gap-8 py-10">
        {db.map((item) => {
          return (
            <div
              className="bg-slate-700 overflow-hidden rounded-2xl"
              key={item.id}
            >
              <img
                className="w-full h-40 object-cover"
                src={item.img}
                alt={item.title}
              />
              <div className="py-2 px-4 flex flex-col justify-center gap-2">
                <h3 className="text-white text-sm">{item.title}</h3>
                <p className="desc text-slate-400 text-xs">
                  {item.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-white text-xs">
                    {item.price === "Free" ? "Free" : `$${item.price}`}
                  </span>
                  <button className="bg-blue-400 text-[14px] text-white font-bold uppercase py-[2px] px-4 rounded-lg cursor-pointer">
                    Info
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GamesCard;
