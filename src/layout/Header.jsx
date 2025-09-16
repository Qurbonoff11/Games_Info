import { NavLink } from "react-router-dom";
import Logo from "../components/Logo.jsx";
import data from "../data/db.js";
import { RiAccountCircleLine } from "react-icons/ri";
import SearchInp from "../components/SearchInp.jsx";
import { useEffect, useState } from "react";
import SearchModal from "../components/SearchModal.jsx";

const { navLinks } = data;

const Header = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const API = "https://api.rawg.io/api/games?key=";
  const KEY = "ecc44a0015a645d8933c0cd1069cf024";

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const req = await fetch(`${API}${KEY}&search=${search}&page_size=10`);
        const data = await req.json();
        setSearchResults(data.results);
      } catch (error) {
        console.error("Failed to fetch search results:", error);
      } finally {
        setSearch("")
      }
    };
    if (search.length >= 3) {
      fetchSearchResults();
    }
  }, [search]);

  return (
    <header className="w-full bg-slate-900 fixed top-0 z-[1000]">
      <nav className="container mx-auto flex items-center justify-between py-4 gap-4 relative">
        <div className="flex items-center justify-between flex-1">
          <Logo />
          <SearchInp onSearch={setSearch} />
          <ul className="flex items-center gap-4">
            {navLinks.map((link) => (
              <li key={link.id} className="relative">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-blue-400 text-blue-400"
                      : `text-white  hover:text-blue-400 before:absolute before:w-0 before:h-[2px]
                      before:bg-blue-400 befor:w-full before:bottom-0 before:left-0 before:transition-all
                      before:ease-in-out before:duration-300 hover:before:w-full`
                  }
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-2xl text-white cursor-pointer duration-300 hover:text-blue-400">
            <RiAccountCircleLine />
          </button>
        </div>
      </nav>
      {search.length > 0 && (
        <SearchModal searchResults={searchResults}/>
      )}
    </header>
  );
};

export default Header;
