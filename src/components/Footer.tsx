import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import socialMediaLinks from "../config";

const Footer = () => {
  return (
    <footer className="relative pt-8 pb-6">
      <div className="container mx-auto">
        <hr className="border-t-2 border-gray-400 mb-6" />
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h5 className="text-2xl fonat-semibold text-green-500">
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
                <span className="block uppercase text-green-500 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-green-600 hover:text-green-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-green-600 hover:text-green-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-green-600 hover:text-green-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-green-600 hover:text-green-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Contact
                    </a>
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
