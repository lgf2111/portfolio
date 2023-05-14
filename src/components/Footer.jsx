import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer class="relative pt-8 pb-6">
            <div class="container mx-auto">
                <hr className="border-t-2 border-gray-400 mb-6" />
                <div class="flex flex-wrap text-left lg:text-left">
                    <div class="w-full lg:w-6/12 px-4">
                        <h5 class="text-2xl fonat-semibold text-green-500">Let's keep in touch!</h5>
                        <div class="mt-3 lg:mb-0 mb-6">
                            <button class="bg-white shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <FontAwesomeIcon icon={faLinkedin} className='text-fuchsia-950' />
                            </button>
                            <button class="bg-white shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <FontAwesomeIcon icon={faGithub} className='text-fuchsia-950' />
                            </button>
                            <button class="bg-white shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <FontAwesomeIcon icon={faInstagram} className='text-fuchsia-950' />
                            </button>
                        </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="flex flex-wrap items-top mb-6">
                            <div class="w-full lg:w-4/12 px-4 ml-auto">
                                <span class="block uppercase text-green-500 text-sm font-semibold mb-2">Useful Links</span>
                                <ul class="list-unstyled">
                                    <li>
                                        <a class="text-green-600 hover:text-green-800 font-semibold block pb-2 text-sm" href="#">Home</a>
                                    </li>
                                    <li>
                                        <a class="text-green-600 hover:text-green-800 font-semibold block pb-2 text-sm" href="#">About</a>
                                    </li>
                                    <li>
                                        <a class="text-green-600 hover:text-green-800 font-semibold block pb-2 text-sm" href="#">Projects</a>
                                    </li>
                                    <li>
                                        <a class="text-green-600 hover:text-green-800 font-semibold block pb-2 text-sm" href="#">Contact</a>
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

