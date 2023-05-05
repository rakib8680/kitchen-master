import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';


const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    // sign out 
    const handleSignOut = () => {
        logOut()
            .then(() => console.log('successfully logged out'))
            .catch(err => console.log(err.message))
    }

    return (
        <nav className="bg-black bg-opacity-90 shadow-md">
            <div className=" py-3 px-4 sm:px-6 lg:px-8">
                <div className="header-container">
                    <Link className='flex flex-col  items-center' to='/home'>
                        <div className="flex-shrink-0">
                            <img className="md:h-20 md:w-20 h-16 w-16 rounded-full" src='/logo.jpg' alt="Kitchen Master Logo" />
                        </div>
                        <h1 className='text-primary font-black pb-4 md:pb-0'>
                            Kitchen Master
                        </h1>
                    </Link>
                    <div className="ml-10 flex items-center md:gap-5">
                        <NavLink to="/home" className={({ isActive }) => (isActive ? 'active-nav' : 'passive-nav')}>Home</NavLink>
                        <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active-nav' : 'passive-nav')}>Blog</NavLink>
                        {
                            user ?
                                <div className='flex'>
                                    <button className='log-out' onClick={handleSignOut}>LogOut</button>
                                    <div className="avatar">
                                        <div className="cursor-pointer user-profile" title={user?.displayName}>
                                            <img src={user?.photoURL} />
                                        </div>
                                    </div>
                                </div>
                                :
                                <>
                                    <NavLink to="/login" className={({ isActive }) => (isActive ? 'active-nav' : 'passive-nav')}>Login</NavLink>
                                    <NavLink to="/register" className={({ isActive }) => (isActive ? 'active-nav' : 'passive-nav')}>Register</NavLink>
                                </>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;