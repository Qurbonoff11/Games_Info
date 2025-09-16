const CardsLoader = () => {
  return (
    <div
      className="bg-slate-700 overflow-hidden w-[280px] rounded-2xl h-80 flex flex-col animate-pulse"
    >
      <div className="w-full h-40 bg-slate-600" />
      <div className="py-2 px-4 flex-1 flex flex-col justify-between gap-2">
        <div className="w-3/4 h-4 bg-slate-600 rounded"></div>
        <div className="w-1/2 h-3 bg-slate-600 rounded"></div>
        <div className="w-full h-3 bg-slate-600 rounded"></div>
        <div className="w-2/3 h-3 bg-slate-600 rounded"></div>
        <div className="w-1/3 h-4 bg-slate-600 rounded"></div>
      </div>
    </div>
  );
};

export default CardsLoader;
