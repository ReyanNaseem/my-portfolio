import Interface from './Interface'
import Logo from '../../public/my-pic.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  return (
    <Interface>
      <div className='flex items-center justify-between w-[100%] h-[100%]'>
      <div className='w-[40%]'>
        <div className='h-[80vh] w-[30vw] bg-black rounded-3xl shadow-blue-700'>
          <img className='object-cover h-[100%]' src={Logo} alt="" />
        </div>
      </div>
      <div className='w-[60%] flex flex-col gap-4'>
        <div>
          <h1 className='text-white text-5xl font-bold uppercase'>I am <span className='text-blue-700'>REYAN NASEEM</span></h1>
          <h1 className='text-white text-5xl font-bold uppercase'>Frontend Developer</h1>
        </div>
        <p className='text-white text-bold text-lg w-[95%]'>
          I build modern, responsive, and scalable web applications using MongoDB, Express.js, React.js, and Node.js. With strong skills in React and Tailwind CSS I turn Figma designs into fully functional, user-friendly websites that perform flawlessly across all devices. Let’s collaborate and bring your ideas to life with clean code and smart solutions! 🚀
        </p>
        <button onClick={()=>navigate('/about')} className='flex items-center justify-between gap-2 pl-4 font-bold text-white h-[56px] border-2 border-blue-700  float-start w-fit rounded-full'>More about me <div className='bg-blue-700 flex items-center justify-center font-bold w-[56px] h-[56px] rounded-full'><i class="ri-arrow-right-long-line text-xl"></i></div></button>
      </div>
    </div>
    </Interface>
  )
}

export default Home