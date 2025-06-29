import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/Hero";

const HomePage = () => {
  return (
    <div className="px-[200px] bg-black">
      <NavBar></NavBar>
      <HeroSection></HeroSection>
    </div>
  );
};

export default HomePage;
