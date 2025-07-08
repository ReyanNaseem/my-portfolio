import React from 'react'
import Interface from './Interface'
import Project1 from '../../public/project1.PNG';
import Project2 from '../../public/project2.PNG';
import Project3 from '../../public/project3.PNG';
import Project4 from '../../public/project4.PNG';
import Project5 from '../../public/project5.PNG';
import Project6 from '../../public/project6.PNG';

const Project = () => {
  return (
    <Interface>
      <div className="w-[100%] min-h-[100vh] py-16">
        <h1 className="text-white text-6xl font-bold text-center mb-12">
          MY <span className="text-blue-700">PROJECTS</span>
        </h1>

        <div className="w-[90%] grid grid-cols-3 gap-8 text-white mx-auto">
          <div className="group relative rounded-md flex items-center justify-center overflow-hidden border-blue-700 cursor-pointer shadow-[0_0_20px_rgba(29,78,216,0.5)]">
            <img
              src={Project1}
              className="w-[100%] bg-cover hover:h-[105%] transition-all duration-700"
              alt=""
            />

            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-green-300 bg-opacity-70 duration-300 text-blue-700 font-bold text-xl">
              Duo Studio Web Clone
            </div>
          </div>

          <div className="group relative rounded-md flex items-center justify-center overflow-hidden border-blue-700 cursor-pointer shadow-[0_0_20px_rgba(29,78,216,0.5)]">
            <img
              src={Project2}
              className="w-[100%] bg-cover hover:h-[105%] transition-all duration-700"
              alt=""
            />

            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-green-300 bg-opacity-70 duration-300 text-blue-700 font-bold text-xl">
              Tic Tac Toe
            </div>
          </div>

          <div className="group relative rounded-md flex items-center justify-center overflow-hidden border-blue-700 cursor-pointer shadow-[0_0_20px_rgba(29,78,216,0.5)]">
            <img
              src={Project3}
              className="w-[100%] bg-cover hover:h-[105%] transition-all duration-700"
              alt=""
            />

            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-green-300 bg-opacity-70 duration-300 text-blue-700 font-bold text-xl">
              Duo Studio Web Clone
            </div>
          </div>

          <div className="group relative rounded-md flex items-center justify-center overflow-hidden border-blue-700 cursor-pointer shadow-[0_0_20px_rgba(29,78,216,0.5)]">
            <img
              src={Project4}
              className="w-[100%] bg-cover hover:h-[105%] transition-all duration-700"
              alt=""
            />

            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-green-300 bg-opacity-70 duration-300 text-blue-700 font-bold text-xl">
              Nurpur Web Clone
            </div>
          </div>

          <div className="group relative rounded-md flex items-center justify-center overflow-hidden border-blue-700 cursor-pointer shadow-[0_0_20px_rgba(29,78,216,0.5)]">
            <img
              src={Project5}
              className="w-[100%] bg-cover hover:h-[105%] transition-all duration-700"
              alt=""
            />

            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-green-300 bg-opacity-70 duration-300 text-blue-700 font-bold text-xl">
              Envanto Web Clone
            </div>
          </div>

          <div className="group relative rounded-md flex items-center justify-center overflow-hidden border-blue-700 cursor-pointer shadow-[0_0_20px_rgba(29,78,216,0.5)]">
            <img
              src={Project6}
              className="w-[100%] bg-cover hover:h-[105%] transition-all duration-700"
              alt=""
            />

            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-green-300 bg-opacity-70 duration-300 text-blue-700 font-bold text-xl">
              Coffee Web Clone
            </div>
          </div>
        </div>
      </div>
    </Interface>
  );
}

export default Project