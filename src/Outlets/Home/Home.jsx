import React from "react";
import Banner from "./HomeComponents/Banner";
import Chef from "./HomeComponents/Chef";
import CookingTips from "./HomeComponents/CookingTips";
import FoodAndHealth from "./HomeComponents/FoodAndHealth";

const Home = () => {
  return (
    <React.Fragment>
      <Banner></Banner>
      <FoodAndHealth></FoodAndHealth>
      <Chef></Chef>
      <CookingTips></CookingTips>
    </React.Fragment>
  );
};

export default Home;
