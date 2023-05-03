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
                <div className=" banner-title">
                    <h2 className='text-secondary'>Authentic Cuisine</h2>
                    <h2 className='text-primary'>Made entirely from scratch</h2>
                    <button className='btn btn-warning btn-outline w-fit btn-sm md:btn-md'>About Us</button>
                </div>
            </div>
            <div className='card-container'>
                <h1 className='text-center text-accent font-black text-4xl md:text-6xl pb-12'>
                    Meet our Chef's
                </h1>
                <div className='md:grid grid-cols-3 container mx-auto p-4 md:p-0'>
                    {
                        allData.map(chef => <Chef chef={chef} key={chef.id}></Chef>)
                    }
                </div>
            </div>
            <div className='bg-warning text-center py-16 '>
                <div className='container mx-auto space-y-10' >
                    <h1 className='text-7xl font-black text-primary tracking-wide'>About Us</h1>
                    <div className='md:flex justify-center items-center gap-52 px-5  md:px-0 '>
                        <div className='md:w-[500px] mb-7 md:mb-0'>
                            <p className='text-2xl font-bold tracking-wider mb-10'>
                                With a flavor bank of extensive Indian spices and wide range of Items to choose, you are unlikely to run out of options.
                            </p>
                            <p className='leading-loose'>
                                A lot of care and responsibility has gone into making our Menu list. Combat your boring days with interesting flavors assured to steal your heart away. Our food menu finds the balance between classics and progressive Indian cuisine. Make your every meal, an interesting experience
                            </p>
                        </div>
                        <div className="avatar">
                            <div className="w-full mask mask-squircle">
                                <img src="/logo.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;