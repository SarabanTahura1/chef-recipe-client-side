import React from "react";
import Banner from "./HomeComponents/Banner";
import Chef from "./HomeComponents/Chef";
import CookingTips from "./HomeComponents/CookingTips";

const Home = () => {
  return (
    <React.Fragment>
      <Banner></Banner>
      <Chef></Chef>
      <CookingTips></CookingTips>
    </React.Fragment>
  );
};

export default Home;
