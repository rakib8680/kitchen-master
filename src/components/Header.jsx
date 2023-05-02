import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/logo.jpg'


const Header = () => {
    return (
        <nav className="bg-black bg-opacity-90 shadow-md">
            <div className=" py-3 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between px-14 ">
                    <Link className='flex flex-col  items-center' to='/'>
                        <div className="flex-shrink-0">
                            <img className="h-20 w-20 rounded-full" src={logo} alt="Kitchen Master Logo" />
                        </div>
                        <h1 className='text-orange-400 font-black'>
                            Kitchen Master
                        </h1>
                    </Link>
                    <div className="hidden md:block ml-10">
                        <Link href="/" className="font-black text-xl text-secondary hover:text-gray-500 transition-all duration-200 mr-4">Home</Link>
                        <Link href="/" className="font-black text-xl text-secondary hover:text-gray-500 transition-all duration-200 mr-4">Recipes</Link>
                        <Link href="/" className="font-black text-xl text-secondary hover:text-gray-500 transition-all duration-200 mr-4">Login</Link>
                        <Link href="/" className="font-black text-xl text-secondary hover:text-gray-500 transition-all duration-200 mr-4">Register</Link>

                    </div>
                </div>
            </div>

            <div className="md:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="/" className="block font-medium text-secondary hover:text-gray-700 py-2">Home</a>
                    <a href="/recipes" className="block font-medium text-secondary hover:text-gray-700 py-2">Recipes</a>
                    <a href="/blog" className="block font-medium text-secondary hover:text-gray-700 py-2">Blog</a>
                    <a href="/about" className="block font-medium text-secondary hover:text-gray-700 py-2">About</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;