import React, { useEffect, useState } from "react";
import SingleChefCard from "../../../Components/SingleChefCard";

const Chef = () => {
  const [chef, setChef] = useState([]);

  useEffect(() => {
    fetch("https://simply-recipes-three.vercel.app/chef-data")
      .then((res) => res.json())
      .then((data) => setChef(data))
      .catch((error) => console.log(error.code));
  }, []);

  return (
    <div className="container mx-auto grid-container my-24 px-4">
      {chef &&
        chef?.map((chef) => (
          <SingleChefCard key={chef.id} chef={chef}></SingleChefCard>
        ))}
    </div>
  );
};

export default Chef;
