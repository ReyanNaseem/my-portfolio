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

const About = () => {
  return (
    <Interface>
      <div className="w-[100%] min-h-[100vh] py-16">
        <h1 className="text-white text-6xl font-bold text-center mb-12">
          ABOUT <span className="text-blue-700">ME</span>
        </h1>
        <div className="flex flex-col gap-12">
          <div>
            <h1 className="text-white text-3xl font-bold mb-8">
              PERSONAL INFOS:
            </h1>
            <table>
              <tbody className="text-left text-white text-md font-thin">
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
            <button className="flex items-center justify-between gap-2 pl-4 font-bold text-white h-[56px] border-2 border-blue-700 w-fit rounded-full mt-8">
              Download CV{" "}
              <div className="bg-blue-700 flex items-center justify-center font-bold w-[56px] h-[56px] rounded-full">
                <i class="ri-download-fill"></i>
              </div>
            </button>
          </div>

          <div>
            <h1 className="text-white text-3xl font-bold mb-8">MY SKILLS:</h1>
            <div className="flex flex-wrap items-center gap-4">
              <img src={Html} className='h-[80px] rounded-md' alt="" />
              <img src={Css} className='h-[80px] rounded-md' alt="" />
              <img src={Js} className='h-[80px] rounded-md' alt="" />
              <img src={Boostrap} className='h-[80px] rounded-md' alt="" />
              <img src={Tailwind} className='h-[80px] rounded-md' alt="" />
              <img src={Github} className='h-[80px] rounded-md' alt="" />
              <img src={React} className='h-[80px] rounded-md' alt="" />
              <img src={Nodejs} className='h-[80px] rounded-md' alt="" />
              <img src={Express} className='h-[80px] rounded-md' alt="" />
              <img src={Mongodb} className='h-[80px] rounded-md' alt="" />
            </div>
          </div>

          <div>
            <h1 className="text-white text-3xl font-bold mb-8">EDUCATION:</h1>
            <div className="flex items-center justify-center">
              <div className="w-[90%] grid grid-cols-2 gap-x-4 gap-y-8">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-blue-700">
                      <i class="ri-graduation-cap-line text-2xl text-white"></i>
                    </div>
                    <div className="w-[1px] h-[100%] border"></div>
                  </div>
                  <div>
                    <p className="bg-gray-800 px-3 py-1 rounded-full w-fit text-white">
                      2024-2025
                    </p>
                    <h1 className="text-white font-bold text-lg">
                      Web & Mobile App Development – SMIT Paposh Branch <br />
                      <span className="font-normal">
                        Completed a comprehensive course in web and mobile app
                        development.
                      </span>
                    </h1>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-blue-700">
                      <i class="ri-graduation-cap-line text-2xl text-white"></i>
                    </div>
                    <div className="w-[1px] h-[100%] border"></div>
                  </div>
                  <div>
                    <p className="bg-gray-800 px-3 py-1 rounded-full w-fit text-white">
                      2024-2025
                    </p>
                    <h1 className="text-white font-bold text-lg">
                      Web & Mobile App Development – SMIT Paposh Branch <br />
                      <span className="font-normal">
                        Completed a comprehensive course in web and mobile app
                        development.
                      </span>
                    </h1>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-blue-700">
                      <i class="ri-graduation-cap-line text-2xl text-white"></i>
                    </div>
                    <div className="w-[1px] h-[100%] border"></div>
                  </div>
                  <div>
                    <p className="bg-gray-800 px-3 py-1 rounded-full w-fit text-white">
                      2024-2025
                    </p>
                    <h1 className="text-white font-bold text-lg">
                      Web & Mobile App Development – SMIT Paposh Branch <br />
                      <span className="font-normal">
                        Completed a comprehensive course in web and mobile app
                        development.
                      </span>
                    </h1>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-blue-700">
                      <i class="ri-graduation-cap-line text-2xl text-white"></i>
                    </div>
                    <div className="w-[1px] h-[100%] border"></div>
                  </div>
                  <div>
                    <p className="bg-gray-800 px-3 py-1 rounded-full w-fit text-white">
                      2024-2025
                    </p>
                    <h1 className="text-white font-bold text-lg">
                      Web & Mobile App Development – SMIT Paposh Branch <br />
                      <span className="font-normal">
                        Completed a comprehensive course in web and mobile app
                        development.
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Interface>
  );
}

export default About