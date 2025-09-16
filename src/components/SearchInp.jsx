const SearchInp = ({onSearch}) => {
  return (
    <div className="w-1/3 flex">
      <input onChange={(e) => onSearch(e.target.value)} className="flex-1 py-1 px-4 outline-none bg-slate-800 text-slate-200 rounded-2xl" type="text" placeholder="Search..."/>
    </div>
  );
};

export default SearchInp;
