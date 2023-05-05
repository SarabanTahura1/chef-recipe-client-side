import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleRecipeCard from "../../Components/SingleRecipeCard";

const ChefData = () => {
  const Recipies = useLoaderData();

  return (
    <div className="my-container mx-auto">
      <div className="grid grid-cols-1 grid-flow-dense md:grid-cols-2 gap-4 my-16">
        {Recipies?.map((recipe) => (
          <SingleRecipeCard key={recipe.id} recipe={recipe}></SingleRecipeCard>
        ))}
      </div>
    </div>
  );
};

export default ChefData;
