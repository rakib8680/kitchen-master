import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaHeart, FaRegStar, FaStar, FaStarHalfAlt, } from 'react-icons/fa';

const RecipesDetails = ({ recipes }) => {


    const { name, ingredients, cooking_method, image } = recipes;

    // disable button and toast 
    const handleDisable = (event) => {
        event.target.disabled = true;
        toast.success('Added to your favorite list')
    }

    return (
        <div>
            <div className="recipe-card-container">
                <figure>
                    <div className="avatar ">
                        <div className="w-56 mask mask-hexagon ">
                            <img src={image} />
                        </div>
                    </div>
                </figure>
                <div className="card-body text-warning w-[100px]">
                    <h2 className="card-title text-3xl font-bold text-primary">{name}</h2>
                    <p className='text-sm'><span className='font-bold text-secondary'>Ingredients : </span> {ingredients.slice(0, 100)}...</p>
                    <p className='text-xs'><span className='font-bold text-secondary'>Cooking Method : </span>{cooking_method.slice(0, 250)}...</p>
                    <p className='flex items-center gap-1'><span className='font-bold text-secondary'>Ratings :</span> <FaStar className='inline' /><FaStar className='inline' /><FaStar className='inline' /><FaStarHalfAlt className='inline' /><FaRegStar className='inline' />3.5</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-sm btn-error" onClick={handleDisable} ><FaHeart /></button>
                    </div>
                </div>
            </div>
            <Toaster
                toastOptions={{
                    style: {
                        border: '1px solid yellow',
                        padding: '16px',
                        color: 'white',
                        blur: '2px',
                        backgroundColor: 'darkGreen',
                    },
                }}
            />
        </div>
    );
};

export default RecipesDetails;