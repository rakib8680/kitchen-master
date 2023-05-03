import React from 'react';

const RecipesDetails = ({ recipes }) => {
    console.log(recipes);

    const { name, cuisine, ingredients, cooking_method, image } = recipes;

    return (
        <div>
            <div className="card lg:card-side backdrop-blur-lg shadow-xl rounded-none w-4/5 mx-auto">
                <figure>
                    <div className="avatar ">
                        <div className="w-60 mask mask-hexagon ">
                            <img src={image} />
                        </div>
                    </div>
                </figure>
                <div className="card-body text-warning">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-secondary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipesDetails;