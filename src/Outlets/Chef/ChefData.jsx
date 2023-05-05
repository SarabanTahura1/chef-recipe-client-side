import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleRecipeCard from "../../Components/SingleRecipeCard";

const ChefData = () => {
  const { id } = useParams();
  const Recipies = useLoaderData();

  const [chefData, setChefData] = useState([]);

  useEffect(() => {
    fetch("https://simply-recipes-three.vercel.app/chef-data")
      .then((res) => res.json())
      .then((data) => {
        const SingleChefData = data.find((chefId) => chefId.id == id);
        setChefData(SingleChefData);
      })
      .catch((error) => console.log(error.code));
  }, []);
  const { bio, picture, name, experience, num_recipes, likes } = chefData;

  return (
    <div className="container mx-auto">
      <div className="my-20 grid grid-cols-1  lg:grid-cols-3 gap-10 px-4">
        <div className="">
          <img src={picture} className="w-full h-96" alt="" />
        </div>
        <div className="lg:col-span-2">
          <h2 className="card-title">{name}</h2>
          <p>{bio}</p>
          <div className="flex flex-col  w-full">
            <span>Experience : {experience}</span>
            <span>Likes : {likes}</span>
          </div>
          <span>No. of Recipe : {num_recipes}</span>
        </div>
      </div>
      <div className="grid grid-cols-1 grid-flow-dense md:grid-cols-2 gap-4 my-16">
        {Recipies?.map((recipe) => (
          <SingleRecipeCard key={recipe.id} recipe={recipe}></SingleRecipeCard>
        ))}
      </div>
    </div>
  );
};

export default ChefData;
