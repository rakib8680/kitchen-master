import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chef from '../Chef';
import './Home.css'



const Home = () => {

    const allData = useLoaderData()
    console.log(allData);

    return (
        <div>
            <div className=" background text-white  flex flex-col justify-center" >
                <div className=" w-[740px] backdrop-blur-lg text-8xl font-black ml-28 p-9 rounded-sm ">
                    <h2 className='text-secondary'>Authentic Cuisine</h2>
                    <h2 className='text-primary'>Made entirely from scratch</h2>
                    <button className='btn btn-warning btn-outline w-fit'>About Us</button>
                </div>
            </div>
            <div className='bg-primary  pt-20'>
                <h1 className='text-center text-accent font-black text-4xl pb-7'>
                    Meet our Chef's
                </h1>
                <div className='grid grid-cols-3 container mx-auto'>
                    {
                        allData.map(chef => <Chef chef={chef} key={chef.id}></Chef>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;