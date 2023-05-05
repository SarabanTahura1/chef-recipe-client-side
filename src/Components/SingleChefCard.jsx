import React, { useState } from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SingleChefCard = ({ chef }) => {
  const [isDisabled, setDisabled] = useState(false);
  const { id, picture, name, experience, num_recipes, likes } = chef;
  const handleDisable = () => {
    setDisabled(true);
    Swal.fire({
      title: "success",
      text: "favourite added",
      icon: "success",
    });
  };

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <LazyLoad threshold={0.95}>
          <img
            src={picture}
            alt="chef"
            className="rounded-xl object-fill h-56 w-full"
          />
        </LazyLoad>
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{name}</h2>
        <div className="flex justify-between items-center w-full">
          <span>Experience : {experience}</span>
          <span>Likes : {likes}</span>
        </div>
        <span>No. of Recipe : {num_recipes}</span>
        <div className="my-4 flex justify-between items-center">
          <Link
            to={`/chef/${id}`}
            className="border-2 px-4 py-2  inline-block cursor-pointer rounded-md hover:border-green-500 text-green-600"
          >
            View Recipe
          </Link>

          {isDisabled ? (
            <button
              onClick={handleDisable}
              disabled
              className="border-2 px-4 py-2  inline-block  rounded-md  text-gray-600"
            >
              Favourite
            </button>
          ) : (
            <button
              onClick={handleDisable}
              className="border-2 px-4 py-2  inline-block cursor-pointer rounded-md border-green-500 text-green-600"
            >
              Favourite
            </button>
          )}

          {/* 



          <button
            onClick={handleDisable}
            disabled={isDisabled ? true : false}
            className="border-2 px-4 py-2  inline-block cursor-pointer rounded-md hover:border-green-500 text-green-600"
          >
            Favourite
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default SingleChefCard;
