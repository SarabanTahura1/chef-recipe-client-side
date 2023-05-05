import React from "react";

const SingleChefCard = ({ chef }) => {
  const { id, picture, name, experience, num_recipes, likes } = chef;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={picture}
          alt="Shoes"
          className="rounded-xl object-fill h-56 w-full"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{name}</h2>
        <div className="flex justify-between items-center w-full">
          <span>Experience : {experience}</span>
          <span>Likes : {likes}</span>
        </div>
        <span>No. of Recipe : {num_recipes}</span>
        <div className=" text-center my-4">
          <button className="btn inline-block btn-primary">View Recipe</button>
        </div>
      </div>
    </div>
  );
};

export default SingleChefCard;
