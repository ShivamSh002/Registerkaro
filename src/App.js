import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import HeroSection from "./Components/HeroSection/HeroSection";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="mt-14 sm:mt-16">
        <HeroSection />
      </div>
    </div>
  );
};

export default App;
