// import React from 'react'

// function PageThree() {
//   return (
//     <>
//     <div data-scroll data-scroll-section data-scroll-speed="-0.1" className='h-screen w-screen bg-lime-700'></div>
//     </>
//   )
// }

// export default PageThree
import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';
import Cards from '../componant/Cards';

function PageThree() {
  useEffect(()=>{
    Aos.init({
      duration: 2000,
      once: true,
      offset: 200,
    });
  },[])
  
  return (
    <>
    {/* data-scroll data-scroll-section data-scroll-speed="0.3" */}
    <div data-scroll data-scroll-section data-scroll-speed="0.85" className='h-screen w-screen relative bg-indigo-'>
      <div data-aos="fade-right" className='  h-[35vw] w-[35vw] absolute top-4 left-7'>  

        <Cards title="SCHOOL" para='Lorem ipsum dolor sit amet consectetur adipisicing elit. Id doloribus maiores exercitationem libero a expedita aliquid ratione recusandae earum fugiat, nostrum harum quis dignissimos quos explicabo excepturi? Praesentium, tempora exercitationem?'/>
      </div>
      <div data-aos="zoom-in" className='absolute top-[50vh] left-[35vw]'>
        <h1  className=' -mx-16 my-2 font-[Arial Black] text-7xl bg-gradient-to-l from-red-500 to-blue-500 bg-clip-text text-transparent font-semibold'> EDUCATION </h1>
        <h1  className=' text-7xl bg-gradient-to-l from-red-500 to-blue-500 bg-clip-text text-transparent font-semibold'> BACKGROUND </h1>
      </div>

      <div data-aos="fade-left" className='h-[35vw] w-[35vw] absolute bottom-4 right-7'>
        <Cards title="COLLAGE" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id doloribus maiores exercitationem libero a expedita aliquid ratione recusandae earum fugiat, nostrum harum quis dignissimos quos explicabo excepturi? Praesentium, tempora exercitationem?"/>
      </div>
    </div>
    </>
  )
}

export default PageThree
