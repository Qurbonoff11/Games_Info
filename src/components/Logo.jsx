import { Link } from "react-router-dom";
import { CgGames } from "react-icons/cg";

const Logo = () => {
  return (
    <>
      <Link to="/">
        <span className="flex items-center justify-center text-blue-400 gap-2 text-2xl">
          <CgGames className="text-3xl"/>
          <span className="font-bold font-ubuntu">Games</span>
        </span>
      </Link>
    </>
  );
}

export default Logo