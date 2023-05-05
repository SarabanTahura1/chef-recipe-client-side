import React from "react";
import { useLoaderData } from "react-router-dom";

const ChefData = () => {
  const chefDetails = useLoaderData();
  console.log(chefDetails);
  return <div></div>;
};

export default ChefData;
