import React from "react";
import { Link } from "react-router-dom";

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
          <Link
            to={`/chef/${id}`}
            className="border-2 px-4 py-2  inline-block cursor-pointer rounded-md hover:border-green-500 text-green-600"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleChefCard;
