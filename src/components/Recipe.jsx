import React from 'react';
import { FaBrain, FaHamburger, FaThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import RecipesDetails from './RecipesDetails';

const Recipe = () => {

    const singleData = useLoaderData()
    const { name, experience, likes, main_recipes, picture, recipes, bio } = singleData

    return (
        <div className='background'>
            <div className='container mx-auto grid grid-cols-12 gap-12 items-center'>
                <div className=' backdrop-blur-xl w-fit  py-5 px-8 flex flex-col col-span-4 rounded-md'>
                    <div className="avatar">
                        <div className="w-72 mask mask-squircle mx-auto">
                            <img src={picture} />
                        </div>
                    </div>
                    <div className='text-accent space-y-3 mt-3'>
                        <h1 className=' text-3xl font-bold'>{name}</h1>
                        
                        <p className='font-normal text-sm opacity-80 flex items-center gap-2'>{bio}</p>
                        <p className='font-normal flex items-center gap-2'><FaBrain /> Experience : {experience}years</p>
                        <p className='font-normal flex items-center gap-2'><FaHamburger />Recipes : {recipes}</p>
                        <p className='font-normal flex items-center gap-2'><FaThumbsUp />Likes : {likes}</p>
                    </div>
                </div>
                <div className='col-span-8 '>
                    {
                        main_recipes.map((recipes,i) => <RecipesDetails recipes={recipes} key={i}></RecipesDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Recipe;