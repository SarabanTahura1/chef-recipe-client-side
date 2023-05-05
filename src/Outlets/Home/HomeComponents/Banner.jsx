import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://i.postimg.cc/nrkdF7Pb/6c55bb682541f51946025683440b8d10.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-5xl">
          <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold ">
            "Delicious and easy-to-follow recipes for any occasion, from
            appetizers to desserts, to satisfy your taste buds and impress your
            guests."
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
