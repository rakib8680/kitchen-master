import React from 'react';

const Chef = ({ chef }) => {

    const { name, picture, experience, id, likes } = chef
    console.log(chef)
    return (
        <div className="card w-96 glass mb-5 text-accent">
            <figure className='h-[250px]'>
                <img src={picture} />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-accent">{name}</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-accent">Learn now!</button>
                </div>
            </div>
        </div>
    );
};

export default Chef;