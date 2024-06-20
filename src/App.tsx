import { useState, useEffect, useRef, useCallback } from "react";
import Cards from "./componant/Cards";
import './App.css'
import Navbar2 from "./componant/Navbar2";
import Bgeffect from "./componant/Bgeffect";
import { motion } from "framer-motion"
import PageOne from "./Pages/PageOne";
import LocomotiveScroll from 'locomotive-scroll';
import PageTwo from "./Pages/PageTwo";
import PageThree from "./Pages/PageThree";
import PageFour from "./Pages/PageFour";
import PageFive from "./Pages/PageFive";



function App() {

  const locomotiveScroll = new LocomotiveScroll();



  
  return (
    
    <>
      {/* <Navbar /> */}
      <div className="min-h-screen w-screen relative">

      <Navbar2/>
      <PageOne/>
      <PageTwo/>
      <PageThree/>
      <PageFour/>
      { <PageFive/>}
      </div>
      
    </>

  );
}

export default App;
