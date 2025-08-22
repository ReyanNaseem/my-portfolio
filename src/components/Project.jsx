import React, { useState } from 'react'
import Interface from './Interface'
import Project1 from '../../public/project1.PNG';
import Project2 from '../../public/project2.PNG';
import Project3 from '../../public/project3.PNG';
import Project4 from '../../public/project4.PNG';
import Project5 from '../../public/project5.PNG';
import Project6 from '../../public/project6.PNG';
import Project7 from '../../public/project7.PNG';
import Project8 from '../../public/project8.PNG';
import Project9 from '../../public/project9.PNG';
import { Link } from 'react-router-dom';

const Project = () => {

  const [open, setOpen] = useState();
  const [check, setCheck] = useState(1);
  const [projectData, setProjectData] = useState([
    {
      id: 1,
      src: Project9,
      text: 'Employee Management System',
      tech: 'Mongodb, Express, React, Node',
      link: 'https://e-m-s-system.vercel.app/login'
    },
    {
      id: 2,
      src: Project8,
      text: 'Loan Craft Full stack app',
      tech: 'Mongodb, Express, React, Node',
      link: 'https://loancraft-app.vercel.app/'
    },
    {
      id: 3,
      src: Project1,
      text: 'Duo Studio Web Clone',
      tech: 'Html, Css, Javascript, Gsap',
      link: 'https://reyannaseem.github.io/Duo-studio/'
    },
    {
      id: 4,
      src: Project2,
      text: 'Tic Tac Toe',
      tech: 'Html, Css, Javascript',
      link: 'https://reyannaseem.github.io/tic-tac-toe/'
    },
    {
      id: 5,
      src: Project3,
      text: 'Toyota Indus Web Clone',
      tech: 'Html, Css, Javascript',
      link: 'https://reyannaseem.github.io/toyota-indus/'
    },
    {
      id: 6,
      src: Project4,
      text: 'Nurpur Web Clone',
      tech: 'Html, Css, Javascript',
      link: 'https://reyannaseem.github.io/nurpur-clone/'
    },
    {
      id: 7,
      src: Project5,
      text: 'Envanto Web Clone',
      tech: 'Html, Css, Javascript',
      link: 'https://reyannaseem.github.io/envato-clone/'
    },
    {
      id: 8,
      src: Project6,
      text: 'Coffee Web Clone',
      tech: 'Html, Css, Javascript',
      link: 'https://reyannaseem.github.io/boostrap/'
    },
    {
      id: 9,
      src: Project7,
      text: 'TODO App',
      tech: 'Html, Css, Js',
      link: 'https://reyannaseem.github.io/To-Do-List/'
    }
  ])

  return (
    <Interface>
      <div className="w-[100%] min-h-[100vh] py-16">

        <h1 className="text-white text-4xl sm:text-6xl font-bold text-center mb-12">
          MY <span className="text-blue-700">PROJECTS</span>
        </h1>

        <div className="w-[90%] grid lg:grid-cols-3 md:grid-cols-2 gap-8 text-white mx-auto">

          {/* project overview div*/}
          <div className={`${open? 'flex': 'hidden'} items-center justify-center w-[100vw] top-0 left-0 fixed h-[100vh] bg-white bg-opacity-20 z-50`}>
            <div className='relative flex flex-col gap-4 rounded-lg lg:w-[600px] w-[100%] mx-8 bg-[#1c1c1c] p-4 sm:p-8'>
              <i onClick={()=>setOpen(false)} className="ri-close-large-line absolute right-4 top-4 cursor-pointer"></i>
              <h1 className='text-center text-2xl sm:text-4xl text-blue-700 font-bold'>
                {projectData[check -1 ].text}
              </h1>
              
              <div className='grid grid-cols-2 '>
                <div className='flex gap-4 text-sm sm:text-lg'>
                  <i className="ri-file-list-2-line"></i>
                  <p>Project: {projectData[check -1 ].text}</p>
                </div>
                <div className='flex gap-4 text-sm sm:text-lg'>
                  <i className="ri-contacts-line"></i>
                  <p>Client: Practice</p>
                </div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='flex gap-4 text-sm sm:text-lg'>
                  <i className="ri-drag-move-fill"></i>
                  <p>Technologies: {projectData[check -1 ].tech}</p>
                </div>
                <div className='flex gap-4 text-sm sm:text-lg'>
                  <i className="ri-live-line"></i>
                  <p>Live At: <Link to={projectData[check -1 ].link} className='text-blue-700 cursor-pointer'>Click here</Link></p>
                </div>
              </div>

              <div>
                <img src={projectData[check -1 ].src} alt="" />
              </div>
            </div>
          </div>

          {
            projectData.map((item)=>{
              return (
                
                  <div
                    key={item.id}
                    onClick={() => {setCheck(item.id); setOpen(true)}}
                    
                    className="group relative rounded-md flex items-center justify-center overflow-hidden border-blue-700 cursor-pointer shadow-[0_0_20px_rgba(29,78,216,0.5)]"
                  >
                    <img
                      src={item.src}
                      className="w-[100%] bg-cover hover:h-[105%] transition-all duration-700"
                      alt=""
                    />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-green-300 bg-opacity-70 duration-300 text-blue-700 font-bold text-xl">
                      {item.text}
                    </div>
                  </div>
                
              );
            })
          }

        </div>
        
      </div>
    </Interface>
  );
}

export default Project