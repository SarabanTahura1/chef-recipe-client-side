import React from "react";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import { Outlet, useNavigation } from "react-router-dom";
import Spinner from "../Components/Spinner";

const MainLayouts = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header></Header>
      <div className="min-h-[calc(100vh-200px)]">
        {navigation.state === "loading" ? <Spinner></Spinner> : ""}
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
