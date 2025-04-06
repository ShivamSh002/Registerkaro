import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import HeroSection from "./Components/HeroSection/HeroSection";
import Highlight from "./Components/HighLight/Highlight";
import ChooseSection from "./Components/ChooseSection/ChooseSection";
import OurServices from "./Components/OurServices/OurServices";
import PartnerSwiper from "./Components/PartnerSwiper/PartnerSwiper";
import BlogSwiper from "./Components/BlogSwiper/BlogSwiper";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="mt-14 sm:mt-16">
        <HeroSection />
      </div>
      
    
      <ChooseSection/>
      <Highlight/>
      <OurServices/>
      <PartnerSwiper/>
      <BlogSwiper/>
   
    </div>
  );
};

export default App;
