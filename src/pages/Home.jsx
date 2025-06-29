import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/Hero";
import Process from "../components/Process";
import Project from "../components/Project";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className=" bg-[#101111] text-white">
      {/* hello */}
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <Process></Process>
      <Project></Project>
      <Testimonial></Testimonial>
      <Footer></Footer>
      <NavBar isFooter={true}></NavBar>
    </div>
  );
};

export default HomePage;
