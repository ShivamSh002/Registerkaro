import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import HeroSection from "./Components/HeroSection/HeroSection";
import Highlight from "./Components/HighLight/Highlight";
import ChooseSection from "./Components/ChooseSection/ChooseSection";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="mt-14 sm:mt-16">
        <HeroSection />
      </div>
      <Highlight/>
    
      <ChooseSection/>
   
    </div>
  );
};

export default App;
