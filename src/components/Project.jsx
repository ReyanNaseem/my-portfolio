import React from 'react'
import Interface from './Interface'

const Project = () => {
  return (
    <Interface>
        <div className='w-[100%] min-h-[100vh] py-16'>
            <h1 className='text-white text-6xl font-bold text-center mb-12'>MY <span className='text-blue-700'>PROJECTS</span></h1>

            <div className='w-[90%] grid grid-cols-3 gap-8 text-white mx-auto'>
              <div className='rounded-md flex items-center justify-center overflow-hidden border-blue-700 cursor-pointer shadow-[0_0_20px_rgba(29,78,216,0.5)]'>
                <img src="./public/project1.PNG" className='w-[100%] bg-cover hover:h-[105%] transition-all duration-700' alt="" />
              </div>
              <div className='rounded-md flex items-center justify-center overflow-hidden border-blue-700 cursor-pointer shadow-[0_0_20px_rgba(29,78,216,0.5)]'>
                <img src="./public/project2.PNG" className='w-[100%] bg-cover hover:h-[105%] transition-all duration-700' alt="" />
              </div>
              <div className='rounded-md flex items-center justify-center overflow-hidden border-blue-700 cursor-pointer shadow-[0_0_20px_rgba(29,78,216,0.5)]'>
                <img src="./public/project3.PNG" className='w-[100%] bg-cover hover:h-[105%] transition-all duration-700' alt="" />
              </div>
              <div className='rounded-md flex items-center justify-center overflow-hidden hover:border-blue-700 cursor-pointer hover:shadow-[0_0_20px_rgba(29,78,216,0.5)]'>
                <img src="./public/project4.PNG" className='w-[100%] bg-cover hover:h-[105%] transition-all duration-700' alt="" />
              </div>
              <div className='rounded-md flex items-center justify-center overflow-hidden hover:border-blue-700 cursor-pointer hover:shadow-[0_0_20px_rgba(29,78,216,0.5)]'>
                <img src="./public/project5.PNG" className='w-[100%] bg-cover hover:h-[105%] transition-all duration-700' alt="" />
              </div>
              <div className='rounded-md flex items-center justify-center overflow-hidden hover:border-blue-700 cursor-pointer hover:shadow-[0_0_20px_rgba(29,78,216,0.5)]'>
                <img src="./public/project6.PNG" className='w-[100%] bg-cover hover:h-[105%] transition-all duration-700' alt="" />
              </div>
              
            </div>
        
        </div>
    </Interface>
  )
}

export default Project