import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';


const Header = () => {

    const {user} = useContext(AuthContext)

    return (
        <nav className="bg-black bg-opacity-90 shadow-md">
            <div className=" py-3 px-4 sm:px-6 lg:px-8">
                <div className="header-container">
                    <Link className='flex flex-col  items-center' to='/'>
                        <div className="flex-shrink-0">
                            <img className="h-20 w-20 rounded-full" src='/logo.jpg' alt="Kitchen Master Logo" />
                        </div>
                        <h1 className='text-orange-400 font-black'>
                            Kitchen Master
                        </h1>
                    </Link>
                    <div className="ml-10 flex">
                    <p className='text-secondary mr-8'>{user}</p>
                        <NavLink to="/home" className={({ isActive }) => (isActive ? 'active-nav' : 'passive-nav')}>Home</NavLink>
                        <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active-nav' : 'passive-nav')}>Blog</NavLink>
                        <NavLink to="/login" className={({ isActive }) => (isActive ? 'active-nav' : 'passive-nav')}>Login</NavLink>
                        <NavLink to="/register" className={({ isActive }) => (isActive ? 'active-nav' : 'passive-nav')}>Register</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;