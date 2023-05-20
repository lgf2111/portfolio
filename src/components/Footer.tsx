import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import socialMediaLinks from "../config";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative pt-8 pb-6">
      <div className="container mx-auto">
        <hr className="border-t-2 border-gray-400 mb-6" />
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h5 className="text-2xl font-semibold text-green-500">
              Let's keep in touch!
            </h5>
            <div className="mt-3 lg:mb-0 mb-6 flex">
              <a
                href={socialMediaLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 shadow-lg font-normal h-9 w-9 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href={socialMediaLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 shadow-lg font-normal h-9 w-9 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href={socialMediaLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 shadow-lg font-normal h-9 w-9 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>{" "}
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-green-500 font-semibold mb-2 text-sm">
                  Useful Links
                </span>
                <ul className="list-unstyled text-green-600">
                  <li>
                    <Link
                      to="/"
                      className="group transition-all duration-300 ease-in-out"
                    >
                      <span className="bg-left-bottom bg-gradient-to-r from-green-600 to-green-400 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] group-hover:text-green-400 transition-all duration-500 ease-out font-medium text-sm">
                        Home
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="group transition-all duration-300 ease-in-out"
                    >
                      <span className="bg-left-bottom bg-gradient-to-r from-green-600 to-green-400 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] group-hover:text-green-400 transition-all duration-500 ease-out font-medium text-sm">
                        About
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/projects"
                      className="group transition-all duration-300 ease-in-out"
                    >
                      <span className="bg-left-bottom bg-gradient-to-r from-green-600 to-green-400 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] group-hover:text-green-400 transition-all duration-500 ease-out font-medium text-sm">
                        Projects
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="group transition-all duration-300 ease-in-out"
                    >
                      <span className="bg-left-bottom bg-gradient-to-r from-green-600 to-green-400 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] group-hover:text-green-400 transition-all duration-500 ease-out font-medium text-sm">
                        Contact
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
