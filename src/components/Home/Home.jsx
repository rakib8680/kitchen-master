import React from 'react';
import './Home.css'



const Home = () => {
    return (
        <div className=" background text-white  flex flex-col justify-center" >
            <div className=" w-[740px] backdrop-blur-lg text-8xl font-black ml-28 p-9 rounded-sm">
                <h2 className='text-secondary'>Authentic Cuisine</h2>
                <h2 className='text-primary'>Made entirely from scratch</h2>
                <button className='btn btn-warning btn-outline w-fit'>About Us</button>
            </div>
        </div>
    );
};

export default Home;