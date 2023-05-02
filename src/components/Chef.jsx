import React from 'react';
import { FaBrain,FaHamburger,FaThumbsUp } from 'react-icons/fa';

const Chef = ({ chef }) => {

    const { name, picture, experience, id, likes, recipes } = chef
    console.log(chef)
    return (
        <div className="card w-96 glass mb-5 text-accent ">
            <figure className='h-[250px]'>
                <img src={picture} />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-accent">{name}</h2>
                <p className='font-normal flex items-center gap-2'><FaBrain/> Experience : {experience}years</p>
                <p className='font-normal flex items-center gap-2'><FaHamburger/>Recipes : {recipes}</p>
                <p className='font-normal flex items-center gap-2'><FaThumbsUp/>Likes : {likes}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-accent">Learn now!</button>
                </div>
            </div>
        </div>
    );
};

export default Chef;