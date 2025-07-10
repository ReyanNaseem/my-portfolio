import Interface from './Interface';
import Html from '../../public/html.png';
import Css from '../../public/css.png';
import Js from '../../public/js.png';
import Boostrap from '../../public/boostrap.png';
import Tailwind from '../../public/tailwind.png';
import Github from '../../public/github.jpg';
import Nodejs from '../../public/nodejs.webp';
import React from '../../public/react.png';
import Express from '../../public/express.png';
import Mongodb from '../../public/mongodb.png';
import Cv from '../../public/reyan_cv.pdf';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const About = () => {

  const [skill, setSkill] = useState([
    { src: Html },
    { src: Css },
    { src: Js },
    { src: Boostrap },
    { src: Tailwind },
    { src: Github },
    { src: React },
    { src: Nodejs },
    { src: Express },
    { src: Mongodb },
  ])

  const [education, setEducation] = useState([
    {
      duration: "2024-2025",
      degree: "Web & Mobile App Development – SMIT Paposh Branch",
      desc: "Completed a comprehensive course in web and mobile app development.",
    },
    {
      duration: "2023-2025",
      degree: "ADP in Web Developement - Virtual University of Pakistan",
      desc: "Pursuing a comprehensive degree in web development.",
    },
    {
      duration: "2020-2022",
      degree: "Intermediate - Jinnah College Nazimabad",
      desc: "Completed a comprehensive degree in science (Pre-Engineering).",
    },
    {
      duration: "2018-2020",
      degree: "Matriculation - Tameer-e-Millat Model School",
      desc: "Completed a comprehensive course in science.",
    },
  ]);

  return (
    <Interface>
      <div className="w-[100%] min-h-[100vh] py-16">
        <h1 className="text-white text-4xl sm:text-6xl font-bold text-center mb-12">
          ABOUT <span className="text-blue-700">ME</span>
        </h1>
        <div className="flex flex-col gap-12">
          <div>
            <h1 className="text-white text-2xl sm:text-3xl font-bold mb-8">
              PERSONAL INFOS:
            </h1>
            <table>
              <tbody className="text-left text-white text-sm sm:text-md font-thin">
                <tr>
                  <th className="w-[280px] p-2">First name: Reyan</th>
                  <th>Address: Gulshan-e-zia Orangi Town Karachi</th>
                </tr>
                <tr>
                  <th className="w-[280px] p-2">Last name: Naseem</th>
                  <th>Phone: 03453134307</th>
                </tr>
                <tr>
                  {/* <th className='w-[280px] p-2'>Age: 22</th> */}
                  <th className="w-[280px] p-2">Nationality: Pakistani</th>
                  <th>Email: reyannaseem516@gmail.com</th>
                </tr>
                {/* <tr>
                    </tr> */}
              </tbody>
            </table>
            <a  href={Cv} download={'reyan_cv'} className="flex items-center justify-between gap-2 pl-4 font-bold text-white h-[56px] border-2 border-blue-700 w-fit rounded-full mt-8">
              Download CV
              <div className="bg-blue-700 flex items-center justify-center font-bold w-[56px] h-[56px] rounded-full">
                <i className="ri-download-fill"></i>
              </div>
            </a>
          </div>

          <div>
            <h1 className="text-white text-2xl sm:text-3xl font-bold mb-8">MY SKILLS:</h1>
            <div className="flex flex-wrap items-center gap-4">
              {
                skill.map((item, index)=>{
                  return(
                    <img key={index} src={item.src} className='h-[60px] sm:h-[80px] rounded-md' alt="" />
                  )
                })
              }
              
            </div>
          </div>

          <div>
            <h1 className="text-white text-2xl sm:text-3xl font-bold mb-8">EDUCATION:</h1>
            <div className="flex items-center justify-center">
              <div className="w-[90%] grid md:grid-cols-2 gap-x-4 gap-y-8">
                {
                  education.map((item, index)=>{
                    return (
                      <div key={index} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-blue-700">
                            <i className="ri-graduation-cap-line text-2xl text-white"></i>
                          </div>
                          <div className="w-[1px] h-[100%] border"></div>
                        </div>
                        <div>
                          <p className="bg-gray-800 px-3 py-1 rounded-full text-sm sm:text-lg mb-2 w-fit text-white">
                            {item.duration}
                          </p>
                          <h1 className="text-white font-bold text-sm sm:text-lg">
                            {item.degree}
                            <br />
                            <span className="font-normal text-sm sm:text-lg">
                              {item.desc}
                            </span>
                          </h1>
                        </div>
                      </div>
                    );
                  })
                }
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </Interface>
  );
}

export default About