import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-10 mx-auto py-8 px-10 flex justify-between items-end bg-green-950 bg-opacity-30">
      <div>
        <Link to="/" className="text-2xl text-green-400 font-bold">
          Lee Guan Feng
        </Link>
      </div>
      <div>
        <ul className="flex gap-x-5 text-green-600">
          <li>
            <Link
              to="/"
              className="group transition-all duration-300 ease-in-out"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-green-600 to-green-400 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] group-hover:text-green-400 transition-all duration-500 ease-out">
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="group transition-all duration-300 ease-in-out"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-green-600 to-green-400 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] group-hover:text-green-400 transition-all duration-500 ease-out">
                About
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="group transition-all duration-300 ease-in-out"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-green-600 to-green-400 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] group-hover:text-green-400 transition-all duration-500 ease-out">
                Projects
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="group transition-all duration-300 ease-in-out"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-green-600 to-green-400 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] group-hover:text-green-400 transition-all duration-500 ease-out">
                Contact
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
