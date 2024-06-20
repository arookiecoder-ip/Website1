import React from 'react'
import { delay, motion } from "framer-motion"
function Navbtn({name}){
  
  return(
    <>
    <motion.div initial={{y:4,scale:0, opacity:0}} animate={{y:0,scale:1, opacity:1}} transition={{duration:0.8, delay:0.3}} className=' font-light group relative h-full w-24 text-zinc- flex items-center justify-center whitespace-nowrap text-md cursor-pointer'>
        <h1 className='group-hover:opacity-0 duration-300 group-hover:-translate-y-5'>{name}</h1>
      <div className='opacity-0 group-hover:opacity-100 group-hover:-translate-y-5 duration-300  absolute top-10 inset-0 flex items-center justify-center text-'>
        <h1>{name}</h1>
      </div>
    </motion.div>
  </>
  )
}

function Navbar2() {
  return (
    <>
    <div className=' absolute z-50  flex items-center justify-end gap-10 h-16 w-[90vw] bg-transparent'>
      {/* <h1 className=' after:content-[""] after:inset-0 '>HOME</h1> */}
       <Navbtn name='Home' />
       <Navbtn name='About ' />
       <Navbtn name='Contuct ' />
       <Navbtn name='Get Starded' />
    </div>
    </>
  )
}

export default Navbar2