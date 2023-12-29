import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = false;
  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
      <h1 className="text-base md:text-xl font-extrabold">
        <Link to="/"> Blog Market</Link>
      </h1>
      <div className="flex justify-center items-center space-x-0">
        <p>
          <BsSearch />
        </p>
        <input
          className="outline-none px-3"
          placeholder="Search a post"
          type="text"
        />
      </div>
      <div className="flex items-center justify-center space-x-2 md:space-x-4">
        {user ? (
          <h3>Write</h3>
        ) : (
          <h3>
            <Link to="/login">Login</Link>
          </h3>
        )}
        {user ? (
          <h3>Profile</h3>
        ) : (
          <h3>
            <Link to="/register">Register</Link>
          </h3>
        )}
      </div>
    </div>
  );
};

export default Navbar;
