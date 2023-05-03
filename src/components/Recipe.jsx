import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Recipe = () => {

    const singleData = useLoaderData()
    const {name, experience, likes,  main_recipes, picture, recipes} = singleData

    return (
        <div className='background'>
                    s
        </div>
    );
};

export default Recipe;