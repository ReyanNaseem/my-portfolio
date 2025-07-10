import Interface from './Interface'
import Logo from '../../public/my-pic.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  return (
    <Interface>
      <div className='flex flex-col lg:flex-row gap-8 items-center justify-between w-[100%] h-[100%] py-8'>
      <div className='lg:w-[40%]'>
        <div className='wrapper-div lg:h-[80vh] lg:w-[30vw] h-[300px] w-[300px] overflow-hidden  rounded-full lg:rounded-3xl'>
          <div className='wrapper-content lg:border-none border-2 border-slate-700 overflow-hidden relative bg-black w-[100%] h-[100%]'>
            <img className='object-cover z-50 h-[100%]' src={Logo} alt="" />
          </div>
        </div>
      </div>
      <div className='lg:w-[60%] w-full lg:items-start items-center justify-center flex flex-col gap-4'>
        <div>
          <h1 className='text-white text-4xl md:text-5xl text-center lg:text-start font-bold uppercase'>I am <span className='text-blue-700'>REYAN NASEEM</span></h1>
          <h1 className='text-white text-4xl md:text-5xl text-center lg:text-start font-bold uppercase'>MERN Stack Developer</h1>
        </div>
        <p className='text-white text-bold text-center lg:text-start text-md md:text-lg w-[90%] md:w-[600px] lg:w-[95%]'>
          I build modern, responsive, and scalable web applications using MongoDB, Express.js, React.js, and Node.js. With strong skills in React and Tailwind CSS I turn Figma designs into fully functional, user-friendly websites that perform flawlessly across all devices. Let’s collaborate and bring your ideas to life with clean code and smart solutions! 🚀
        </p>
        <button onClick={()=>navigate('/about')} className='flex items-center justify-between gap-2 pl-4 font-bold text-white h-[56px] border-2 border-blue-700  float-start w-fit rounded-full'>More about me <div className='bg-blue-700 flex items-center justify-center font-bold w-[56px] h-[56px] rounded-full'><i className="ri-arrow-right-long-line text-xl"></i></div></button>
      </div>
    </div>
    </Interface>
  )
}

export default Home