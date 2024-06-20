import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';

function Cards({title,para}) {
  return (<>
    <div className='group relative  flex justify-center overflow-hidden items-center h-full w-full  text-md rounded-lg bg-red-  text-white'>

      <div className='absolute blur-xl origin-top-left top-1/2 left-1/2  opacity-100 group-hover:opacity-100 size-full rounded-xl shadow-lg  bg-gradient-to-br  from-red-500 to-blue-500 animate-spin'></div>

      <div className='absolute blur-xl origin-bottom-right -top-1/2 -left-1/2 opacity-100 group-hover:opacity-100 size-full  rounded-xl shadow-lg  bg-gradient-to-br  from-red-500 to-blue-500 animate-spin'></div>

      <div className='absolute h-[99.3%] w-[99.3%]  rounded-lg bg-black'>
        <h1 data-aos="fade-center" className='p-3 pt-16 pb-9 font-semibold text-3xl text-center'>{title}</h1>
        <p data-aos="zoom-in" className='p-5 text-md'>{para}</p>
      </div>
    </div>
  </>
  )
}

export default Cards