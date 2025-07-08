import { useNavigate } from 'react-router-dom'

const Interface = ({children}) => {

  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-center relative bg-[#1c1c1c] overflow-x-hidden w-full min-h-[100vh] px-[6vw]'>

        <div className='fixed flex flex-col items-end gap-4 z-50 top-[50%] -translate-y-[50%] right-[2%] text-white w-[180px]'>

          <div className='flex justify-end' onClick={()=>{navigate("/")}}>
            <p className='group flex items-center justify-end w-[60px] h-[60px]  rounded-full bg-blue-700 cursor-pointer transition-all duration-700 hover:w-[180px] relative'>
            <span className='absolute left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 whitespace-nowrap text-2xl'>Home</span>
            <i className="ri-home-office-line text-3xl mr-[14px]"></i>
          </p>
          </div>

          <div className='flex justify-end' onClick={()=>{navigate("/about")}}>
            <p className='group flex items-center justify-end w-[60px] h-[60px]  rounded-full bg-gray-700 cursor-pointer transition-all duration-700 hover:w-[180px] relative hover:bg-blue-700'>
            <span className='absolute left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 whitespace-nowrap text-2xl'>About me</span>
            <i className="ri-user-follow-line text-3xl mr-[14px]"></i>
          </p>
          </div>

          <div className='flex justify-end' onClick={()=>{navigate("/project")}}>
            <p className='group flex items-center justify-end w-[60px] h-[60px]  rounded-full bg-gray-700 cursor-pointer transition-all duration-700 hover:w-[180px] relative hover:bg-blue-700'>
            <span className='absolute left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 whitespace-nowrap text-2xl'>Projects</span>
            <i className="ri-book-shelf-fill text-3xl mr-[14px]"></i>
          </p>
          </div>

          <div className='flex justify-end' onClick={()=>{navigate("/contact")}}>
            <p className='group flex items-center justify-end w-[60px] h-[60px]  rounded-full bg-gray-700 cursor-pointer transition-all duration-700 hover:w-[180px] relative hover:bg-blue-700'>
            <span className='absolute left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 whitespace-nowrap text-2xl'>contact</span>
            <i className="ri-folder-user-line text-3xl mr-[14px]"></i>
            </p>
          </div>
        </div>

        {children}
        {/* <About/> */}
    </div>
  )
}

export default Interface