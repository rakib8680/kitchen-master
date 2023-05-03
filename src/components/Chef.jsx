import React from 'react';
import { FaBrain,FaHamburger,FaThumbsUp } from 'react-icons/fa';

const Chef = ({ chef }) => {

    const { name, picture, experience, id, likes, recipes } = chef
    console.log(chef)
    return (
        <div className="card md:w-96 md:glass border border-primary  mb-5 text-accent ">
            <figure className='h-[250px]'>
                <img src={picture} />
            </figure>
            <div className="card-body text-green-900">
                <h2 className="card-title font-bold text-orange-primary text-2xl">{name}</h2>
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