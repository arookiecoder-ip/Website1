import React from 'react'
import { delay, motion } from "framer-motion"

function PageTwo() {


  return (
    // 
    <>
    
    <div data-scroll data-scroll-section data-scroll-speed="0.2" className=' w-screen rounded-tl-3xl  rounded-tr-3xl pt-20 pb-48 bg-[#162945a9]  '>
      <div className='w-screen border-t-2 border-b-2 border-white flex items-center whitespace-nowrap overflow-hidden  '>
        
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity,duration:"6", ease:"linear"}} className='text-[10vw] font-semibold '>A CODER  DEVLOPER  DESIGNER</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity,duration:"6", ease:"linear"}} className='text-[10vw] font-semibold'>A CODER  DEVLOPER  DESIGNER</motion.h1>

        {/* <h1 className='text-[20vw] font-semibold '>HELLO</h1> */}
      </div>
    </div>
    </>
  )
}

export default PageTwo