import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  const navLinks = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "About",
      path: "/about",
    },
    {
      id: 3,
      title: "Contact",
      path: "/contact",
    },
    {
      id: 4,
      title: "Pricing",
      path: "/pricing",
    },
  ];

  return (
    <header className="w-full bg-slate-900 fixed top-0">
      <nav className="container mx-auto flex items-center justify-between py-2">
        <Logo />
        <ul className="flex items-center gap-4">
          {navLinks.map((link) => (
            <li key={link.id} className="relative">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-blue-400 text-blue-400"
                    : `text-white hover:text-blue-400 before:absolute before:w-0 before:h-[2px]
                      before:bg-blue-400 befor:w-full before:bottom-0 before:left-0 before:transition-all
                      before:ease-in-out before:duration-300 hover:before:w-full`
                }
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
