import React from 'react'
import Interface from './Interface'

const Contact = () => {
  return (
    <Interface>
        <div className='w-[100%] min-h-[100vh] py-16'>
            <h1 className='text-white text-4xl sm:text-6xl font-bold text-center mb-12'>GET IN <span className='text-blue-700'>TOUCH</span></h1>
            <div className=' text-white flex items-center justify-center'>
                <div className='lg:w-[90%] grid md:grid-cols-2 gap-4'>
                    <div className='text-sm sm:text-lg'>
                        <h1 className='text-2xl sm:text-3xl font-bold'>DON'T BE SHY!</h1>
                        <p className='my-4'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
        
                          <div className='flex gap-4 items-center'>
                            <i class="ri-mail-fill text-4xl text-blue-700"></i>
                            <p>reyannaseem516@gmail.com</p>
                          </div>
                          <div className='flex gap-4 items-center my-4'>
                            <i class="ri-contacts-fill text-4xl text-blue-700"></i>
                            <p>+92 345 3134307</p>
                          </div>
                          <div className='flex items-center justify-start gap-4'>
                            <div className='w-[44px] h-[44px] rounded-full bg-gray-700 flex items-center justify-center text-2xl cursor-pointer transition-[0.3s] hover:bg-blue-700'>
                              <i class="ri-linkedin-fill"></i>
                            </div>
                            <div className='w-[44px] h-[44px] rounded-full bg-gray-700 flex items-center justify-center text-2xl cursor-pointer transition-[0.3s] hover:bg-blue-700'>
                              <i class="ri-whatsapp-line"></i>
                            </div>
                          </div>
                      
                    </div>
                    <div className=' flex flex-col gap-4'>
                      <div className='flex gap-4'>
                        <input type="text" className='w-[100%] p-3 rounded-full bg-gray-700 outline-none' placeholder='Your name' />
                        <input type="text" className='w-[100%] p-3 rounded-full bg-gray-700 outline-none' placeholder='Your email' />
                        <input type="text" className='w-[100%] p-3 rounded-full bg-gray-700 outline-none' placeholder='Your subject' />
                      </div>
                      <textarea rows={6} className='w-[100%] p-3 rounded-[20px] bg-gray-700 outline-none' placeholder='Your message'></textarea>
                      
                      <button className='flex items-center justify-between gap-2 pl-4 font-bold text-white h-[56px] border-2 border-blue-700  float-start w-fit rounded-full'>
                        Sent Message
                        <div className='bg-blue-700 flex items-center justify-center font-bold w-[56px] h-[56px] rounded-full'>
                          <i class="ri-send-plane-fill text-xl"></i>
                        </div>
                      </button>
                    </div>
                </div>
            </div>
        </div>
    </Interface>
  )
}

export default Contact