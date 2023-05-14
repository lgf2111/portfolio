import React from 'react';

const Header = () => {
    return (
        <section>
            <header className='container mx-auto mt-5 px-5 flex justify-between'>
                <div>
                    <h1 className='text-xl text-green-400'>Lee Guan Feng</h1>
                </div>
                <div>
                    <ul className='flex gap-x-5 text-green-600'>
                        <li>
                            <a href='#' className='group transition-all duration-300 ease-in-out'>
                                <span className='bg-left-bottom bg-gradient-to-r from-green-600 to-green-400 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] group-hover:text-green-400 transition-all duration-500 ease-out'>Home</span>
                            </a>
                        </li>
                        <li>
                            <a href='#' className='group transition-all duration-300 ease-in-out'>
                                <span className='bg-left-bottom bg-gradient-to-r from-green-600 to-green-400 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] group-hover:text-green-400 transition-all duration-500 ease-out'>About</span>
                            </a>
                        </li>
                        <li>
                            <a href='#' className='group transition-all duration-300 ease-in-out'>
                                <span className='bg-left-bottom bg-gradient-to-r from-green-600 to-green-400 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] group-hover:text-green-400 transition-all duration-500 ease-out'>Projects</span>
                            </a>
                        </li>
                        <li>
                            <a href='#' className='group transition-all duration-300 ease-in-out'>
                                <span className='bg-left-bottom bg-gradient-to-r from-green-600 to-green-400 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] group-hover:text-green-400 transition-all duration-500 ease-out'>Contact</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        </section>
    );
};

export default Header;
