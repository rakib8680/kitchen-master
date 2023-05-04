import React from 'react';
import { FaBrain, FaHamburger, FaThumbsUp } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {

    const { name, picture, experience, id, likes, recipes } = chef
    return (
        <div className="card md:w-96 glass border border-primary  mb-5 text-accent ">
            <figure className='h-[250px]'>
                <LazyLoad threshold={0.8} height={300} offset={200} >
                    <img src={picture} />
                </LazyLoad>
            </figure>
            <div className="card-body text-green-900">
                <h2 className="card-title font-bold text-orange-primary text-2xl">{name}</h2>
                <p className='font-normal flex items-center gap-2'><FaBrain /> Experience : {experience}years</p>
                <p className='font-normal flex items-center gap-2'><FaHamburger />Recipes : {recipes}</p>
                <p className='font-normal flex items-center gap-2'><FaThumbsUp />Likes : {likes}</p>
                <div className="card-actions justify-end">
                    <Link className='btn btn-accent' to={`/recipe/${id}`}>View Recipes</Link>
                </div>
            </div>
        </div>
    );
};

export default Chef;