import React from 'react'



function Bgeffect() {
  return (
    <>
    <div className='h-full w-full absolute'>
      <div className=' relative h-full w-full '>

        <div className='animate- absolute top-[30%] left-[60%] translate-y-[30vh] h-1/5 w-1/5 bg-purple-500 rounded-[50%] blur-3xl'></div> 
        <div className=' absolute top-[20%] left-[40%] translate-y-[30vh] h-1/5 w-1/5 bg-red-400 rounded-[50%] blur-3xl'></div>
        <div className='  absolute top-[30%] left-[20%] h-1/5 w-1/5 bg-blue-500 rounded-[50%] blur-3xl'></div>

        <div className='h-full w-full absolute bg-transparent text-5xl flex items-center justify-center'></div>
      </div>
    </div>
    </>
  )
}

export default Bgeffect