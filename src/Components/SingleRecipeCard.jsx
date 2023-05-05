import React from "react";
import { AiTwotoneStar } from "react-icons/ai";

const SingleRecipeCard = ({ recipe }) => {
  const { rating, cooking_method, ingredients, image_link, recipe_name } =
    recipe;
  return (
    <div className="card w-full h-fit bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image_link}
          alt="Shoes"
          className="rounded-xl object-fill h-56 w-full"
        />
      </figure>
      <div className="card-body ">
        <h2 className=" text-center text-xl font-bold px-4 border-green-500 border-2 rounded-full py-2">
          {recipe_name}
        </h2>
        <div>
          <p className="text-xl font-semibold underline py-2">Ingredients</p>
          {ingredients.map((ingredient) => (
            <span key={ingredient.id}>{ingredient}</span>
          ))}
        </div>
        <div>
          <p className="text-xl font-semibold underline py-2">Cooking Method</p>
          {cooking_method.map((method) => (
            <span key={method.id}>{method}</span>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <span className="text-lg font-semibold py-2">Ratings : {rating}</span>
          <AiTwotoneStar className="text-yellow-600 text-xl" />{" "}
        </div>
      </div>
    </div>
  );
};

export default SingleRecipeCard;
