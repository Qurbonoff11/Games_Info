import { CgClose } from "react-icons/cg";

const SearchInp = ({onSearch}) => {
  return (
    <div className="w-1/3 flex bg-slate-800 rounded-2xl items-center ">
      <input onChange={(e) => onSearch(e.target.value)} className="flex-1 py-1 px-4 outline-none text-slate-200 " type="text" placeholder="Search..."/>
      <button className="p-1 mx-2 rounded-full hover:bg-slate-700 duration-300">
        <CgClose className="text-slate-500 font-bold cursor-pointer"/>
      </button>
    </div>
  );
};

export default SearchInp;
