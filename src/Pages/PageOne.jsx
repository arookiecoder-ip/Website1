import React from 'react'
import { delay, motion } from "framer-motion"

// import '/App.css';

// <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>



function PageOne() {
  
  return (
    <>
      
      <div data-scroll data-scroll-section data-scroll-speed="-0.3" className='h-screen w-screen relative pt-16'>

        {/*  */}
        <div className=' absolute h-full w-full top-0 '>

          {/* <div className='animate- absolute  h-1/2 w-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#F4EEE0] to-[#393646]  blur-xl'></div> */}

          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          {/* <div className='h-full w-full absolute bg-transparent text-5xl flex items-center justify-center'></div> */}
        </div>
        {/*  */}

      

        <div className=' bg-gradient-to-r from-slate-300 to-[#2a3e99] bg-clip-text mt-40 '>
          <motion.h1
            initial={{ y: 80, opacity: 0, width: 0 }}
            animate={{ y: 10, opacity: 1, width: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ fontFamily: '"Poiret One", sans-serif' }}
            className=' text-nowrap text-[8vw] text-transparent pl-80 tracking-light font-[800]'>
            Hi,  I'm
          </motion.h1>

        </div>
        <div className=' animate-textEffect bg-gradient-to-r from-slate-300 to-[#992a92] bg-clip-text ml-40 mt-0 '>
          <h1
            style={{ fontFamily: '"Monsieur La Doulaise", cursive' }}
            className=' text-nowrap text-[8vw] text-transparent pl-80 tracking-light font-[800]'>
            Jeet Karmakar
          </h1>

        </div>
      </div>
    </>
  )//#2a9699
}

export default PageOne