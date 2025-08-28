import { Link } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";

const Logo = () => {
  return (
    <>
      <Link to="/">
        <span className="flex items-center justify-center text-blue-400 gap-2 text-2xl">
          <BiCameraMovie className="text-3xl" />
          <span className="font-bold font-ubuntu">Movies</span>
        </span>
      </Link>
    </>
  );
}

export default Logo