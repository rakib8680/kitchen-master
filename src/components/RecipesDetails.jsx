import React from 'react';
import { FaHeart, FaRegStar, FaStar, FaStarAndCrescent, FaStarHalf, FaStarHalfAlt, FaStarOfDavid } from 'react-icons/fa';

const RecipesDetails = ({ recipes }) => {
    console.log(recipes);

    const { name, cuisine, ingredients, cooking_method, image } = recipes;

    return (
        <div>
            <div className="card lg:card-side backdrop-blur-2xl shadow-xl rounded-none  mx-auto py-2 px-1">
                <figure>
                    <div className="avatar ">
                        <div className="w-56 mask mask-hexagon ">
                            <img src={image} />
                        </div>
                    </div>
                </figure>
                <div className="card-body text-warning w-[100px]">
                    <h2 className="card-title text-3xl font-bold text-primary">{name}</h2>
                    <p className='text-xs'><span className='font-bold text-secondary'>Ingredients : </span> {ingredients.slice(0, 100)}...</p>
                    <p className='text-sm'><span className='font-bold text-secondary'>Cooking Method : </span>{cooking_method.slice(0, 250)}...</p>
                    <p className='flex items-center gap-1'><span className='font-bold text-secondary'>Ratings :</span> <FaStar className='inline'/><FaStar className='inline'/><FaStar className='inline'/><FaStarHalfAlt className='inline'/><FaRegStar className='inline'/>3.5</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-xs btn-error "><FaHeart/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipesDetails;