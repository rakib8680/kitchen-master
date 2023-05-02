import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <nav className="bg-black bg-opacity-90 shadow-md">
            <div className=" py-3 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between md:px-14 flex-col md:flex-row">
                    <Link className='flex flex-col  items-center' to='/'>
                        <div className="flex-shrink-0">
                            <img className="h-20 w-20 rounded-full" src='/logo.jpg' alt="Kitchen Master Logo" />
                        </div>
                        <h1 className='text-orange-400 font-black'>
                            Kitchen Master
                        </h1>
                    </Link>
                    <div className="  ml-10">
                        <NavLink to="/home" className={({ isActive }) => (isActive ? 'font-black text-xl text-primary hover:text-gray-500 transition-all duration-200 mr-4' : 'font-black text-xl text-secondary hover:text-gray-500 transition-all duration-200 mr-4')}>Home</NavLink>
                        <NavLink to="/a" className={({ isActive }) => (isActive ? 'font-black text-xl text-primary hover:text-gray-500 transition-all duration-200 mr-4' : 'font-black text-xl text-secondary hover:text-gray-500 transition-all duration-200 mr-4')}>Recipes</NavLink>
                        <NavLink to="/login" className={({ isActive }) => (isActive ? 'font-black text-xl text-primary hover:text-gray-500 transition-all duration-200 mr-4' : 'font-black text-xl text-secondary hover:text-gray-500 transition-all duration-200 mr-4')}>Login</NavLink>
                        <NavLink to="/register" className={({ isActive }) => (isActive ? 'font-black text-xl text-primary hover:text-gray-500 transition-all duration-200 mr-4' : 'font-black text-xl text-secondary hover:text-gray-500 transition-all duration-200 mr-4')}>Register</NavLink>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;