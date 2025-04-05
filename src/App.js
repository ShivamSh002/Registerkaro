import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import HeroSection from "./Components/HeroSection/HeroSection";
import Highlight from "./Components/HighLight/Highlight";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="mt-14 sm:mt-16">
        <HeroSection />
      </div>
      <Highlight/>
    </div>
  );
};

export default App;
