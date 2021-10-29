/* eslint-disable */
import react from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import CarouselBox from "../CarouselBox";
import Footer from "../Footer";
import Navbar from "../Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CarouselBox />
      <Footer />
    </>
  );
}

export default Home;
