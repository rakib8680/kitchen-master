import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chef from '../Chef';
import './Home.css'



const Home = () => {

    const allData = useLoaderData()

    return (
        <div>
            <div className=" background text-white  flex flex-col justify-center" >
                <div className=" banner-title">
                    <h2 className='text-secondary'>Authentic Cuisine</h2>
                    <h2 className='text-primary'>Made entirely from scratch</h2>
                    <button className='btn btn-warning btn-outline w-fit btn-sm md:btn-md'>Order Now</button>
                </div>
            </div>

            {/* chef card  */}
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

            {/* featured food  */}
            <div className='bg-gradient-to-b from-warning  to-primary py-16 px-4 md:px-0'>
                <h1 className='md:text-5xl text-4xl text-center font-black text-orange-600 mb-10'>Featured Foods</h1>
                <div className="carousel md:w-[500px] md:h-[350px] mx-auto">
                    <div id="item1" className="carousel-item w-full">
                        <img src='http://www.indiancuisinerestaurant.com/img/curry.jpg' className="w-auto rounded-2xl" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src="http://www.indiancuisinerestaurant.com/img/biryani.jpg" className="w-auto rounded-2xl" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src="http://www.indiancuisinerestaurant.com/img/lollypop.jpg" className="w-auto rounded-2xl" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src="http://www.indiancuisinerestaurant.com/img/fritters.jpg" className="w-auto rounded-2xl" />
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2 mt-3 mb-6">
                    <a href="#item1" className="btn btn-secondary btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs btn-secondary">2</a>
                    <a href="#item3" className="btn btn-xs btn-secondary">3</a>
                    <a href="#item4" className="btn btn-xs btn-secondary">4</a>
                </div>
                <div className='container mx-auto mt-3'>
                    <p className='md:text-lg md:font-semibold glass bg-primary p-7 text-accent rounded-2xl'>
                        1. <span className='text-xl font-black text-orange-700'>Butter Chicken:</span> This North Indian dish features tender pieces of chicken cooked in a creamy tomato-based sauce, flavored with spices like garam masala, cumin, and coriander. It's typically served with fluffy basmati rice and naan bread. <br />

                        2. <span className='text-xl font-black text-orange-700'>Chicken Biriyani:</span>  These popular snacks consist of crispy pastry shells filled with spiced potatoes, peas, and sometimes meat. They're usually fried or baked and served with a side of chutney for dipping. <br />

                        3. <span className='text-xl font-black text-orange-700'>Chicken Fry:</span>  Hailing from South India, this dish features a thin, crispy crepe made from fermented rice and lentil batter, stuffed with a spiced potato filling. It's often served with sambar (a lentil soup) and coconut chutney. <br />

                        4. <span className='text-xl font-black text-orange-700'>Butter Chola:</span>  A favorite breakfast dish in North India, this spicy and tangy chickpea curry is served with fluffy deep-fried bread called bhature. It's a filling and hearty dish that's perfect for a weekend brunch. <br />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;