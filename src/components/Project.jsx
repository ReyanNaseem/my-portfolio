import React from 'react'
import Interface from './Interface'

const Project = () => {
  return (
    <Interface>
        <div className='w-[100%] min-h-[100vh] py-16'>
            <h1 className='text-white text-6xl font-bold text-center mb-8'>GET IN <span className='text-blue-700'>TOUCH</span></h1>
            <div className='border text-white flex items-center justify-center'>
                <div className='w-[90%] border'>
                    <div className='w-[40%]'>
                        <h1>DON'T BE SHY!</h1>
                        <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
                    
                    </div>
                    <div className='w-[60%]'>

                    </div>
                </div>
            </div>
        </div>
    </Interface>
  )
}

export default Project