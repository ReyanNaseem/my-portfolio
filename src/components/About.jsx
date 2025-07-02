import React from 'react'
import Interface from './Interface'

const About = () => {
  return (
    <Interface>
        <div className='w-[100%] min-h-[100vh] py-16'>
        <h1 className='text-white text-6xl font-bold text-center mb-8'>ABOUT <span className='text-blue-700'>ME</span></h1>
        <div className='flex flex-col gap-12'>
            <div>
            <h1 className='text-white text-3xl font-bold mb-8'>PERSONAL INFOS:</h1>
            <table>
                <tbody className='text-left text-white text-md font-thin'>
                    <tr>
                        <th className='w-[280px] p-2'>First name: Reyan</th>
                        <th>Address: Gulshan-e-zia Orangi Town Karachi</th>
                    </tr>
                    <tr>
                        <th className='w-[280px] p-2'>Last name: Naseem</th>
                        <th>Phone: 03453134307</th>
                    </tr>
                    <tr>
                        <th className='w-[280px] p-2'>Age: 22</th>
                        <th>Email: reyannaseem516@gmail.com</th>
                    </tr>
                    <tr>
                        <th className='w-[280px] p-2'>Nationality: Pakistani</th>
                    </tr>
                </tbody>
            </table>
            <button className='flex items-center justify-between gap-2 pl-4 font-bold text-white h-[56px] border-2 border-blue-700 w-fit rounded-full mt-8'>Download CV <div className='bg-blue-700 flex items-center justify-center font-bold w-[56px] h-[56px] rounded-full'><i class="ri-download-fill"></i></div></button>
            </div>

            <div>
                <h1 className='text-white text-3xl font-bold mb-8'>MY SKILLS:</h1>
                <div className='border h-16'>

                </div>
            </div>

            <div>
                <h1 className='text-white text-3xl font-bold mb-8'>EDUCATION:</h1>
                <div className='flex items-center justify-center'>
                    <div className='w-[90%] grid grid-cols-2 gap-x-4 gap-y-8'>
                        <div className='flex gap-4'>
                        <div className='flex flex-col items-center'>
                            <div className='w-[40px] h-[40px] flex items-center justify-center rounded-full bg-blue-700'>
                                <i class="ri-graduation-cap-line text-2xl text-white"></i>
                            </div>
                            <div className='w-[1px] h-[100%] border'>

                            </div>
                        </div>
                        <div>
                            <p className='bg-gray-800 px-3 py-1 rounded-full w-fit text-white'>2024-2025</p>
                            <h1 className='text-white font-bold text-lg'>
                                Web & Mobile App Development – SMIT Paposh Branch <br />
                                <span className='font-normal'>Completed a comprehensive course in web and mobile app development.</span>
                            </h1>
                        </div>
                        </div>
                        <div className='flex gap-4'>
                        <div className='flex flex-col items-center'>
                            <div className='w-[40px] h-[40px] flex items-center justify-center rounded-full bg-blue-700'>
                                <i class="ri-graduation-cap-line text-2xl text-white"></i>
                            </div>
                            <div className='w-[1px] h-[100%] border'>

                            </div>
                        </div>
                        <div>
                            <p className='bg-gray-800 px-3 py-1 rounded-full w-fit text-white'>2024-2025</p>
                            <h1 className='text-white font-bold text-lg'>
                                Web & Mobile App Development – SMIT Paposh Branch <br />
                                <span className='font-normal'>Completed a comprehensive course in web and mobile app development.</span>
                            </h1>
                        </div>
                        </div>
                        <div className='flex gap-4'>
                        <div className='flex flex-col items-center'>
                            <div className='w-[40px] h-[40px] flex items-center justify-center rounded-full bg-blue-700'>
                                <i class="ri-graduation-cap-line text-2xl text-white"></i>
                            </div>
                            <div className='w-[1px] h-[100%] border'>

                            </div>
                        </div>
                        <div>
                            <p className='bg-gray-800 px-3 py-1 rounded-full w-fit text-white'>2024-2025</p>
                            <h1 className='text-white font-bold text-lg'>
                                Web & Mobile App Development – SMIT Paposh Branch <br />
                                <span className='font-normal'>Completed a comprehensive course in web and mobile app development.</span>
                            </h1>
                        </div>
                        </div>
                        <div className='flex gap-4'>
                        <div className='flex flex-col items-center'>
                            <div className='w-[40px] h-[40px] flex items-center justify-center rounded-full bg-blue-700'>
                                <i class="ri-graduation-cap-line text-2xl text-white"></i>
                            </div>
                            <div className='w-[1px] h-[100%] border'>

                            </div>
                        </div>
                        <div>
                            <p className='bg-gray-800 px-3 py-1 rounded-full w-fit text-white'>2024-2025</p>
                            <h1 className='text-white font-bold text-lg'>
                                Web & Mobile App Development – SMIT Paposh Branch <br />
                                <span className='font-normal'>Completed a comprehensive course in web and mobile app development.</span>
                            </h1>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Interface>
  )
}

export default About