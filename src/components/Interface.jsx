import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Interface = ({ children }) => {

  const [menu, setmenu] = useState([
    {
      src: "/",
      text: "Home",
      icon: "ri-home-office-line text-3xl mr-[14px]",
    },
    {
      src: "/about",
      text: "About me",
      icon: "ri-user-follow-line text-3xl mr-[14px]",
    },
    {
      src: "/project",
      text: "Projects",
      icon: "ri-book-shelf-fill text-3xl mr-[14px]",
    },
    {
      src: "/contact",
      text: "Contact",
      icon: "ri-folder-user-line text-3xl mr-[14px]",
    }
  ]);
  const [toggel, setToggel] = useState(false)
  
  const {pathname} = useLocation()
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center relative bg-[#1c1c1c] overflow-x-hidden w-full min-h-[100vh] px-[3vw] lg:px-[6vw]">
      <div className="fixed hidden lg:flex flex-col items-end gap-4 z-50 top-[50%] -translate-y-[50%] right-[2%] text-white w-[180px]">
        {menu.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-end"
              onClick={() => {
                navigate(item.src);
              }}
            >
              <p
                className={`group flex items-center justify-end w-[60px] h-[60px]  rounded-full ${
                  pathname == item.src ? "bg-blue-700" : "bg-gray-700"
                } hover:bg-blue-700 cursor-pointer transition-all duration-700 hover:w-[180px] relative`}
              >
                <span className="absolute left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 whitespace-nowrap text-2xl">
                  {item.text}
                </span>
                <i className={item.icon}></i>
              </p>
            </div>
          );
        })}
      </div>

        <i onClick={()=>setToggel(true)} className="ri-menu-2-line lg:hidden text-3xl font-bold cursor-pointer text-white absolute top-4 right-4"></i>
      <div className={`absolute top-0 ${toggel? 'right-0': 'right-[-350px]'} z-50 flex flex-col pt-12 shadow-lg shadow-black bg-[#1c1c1c] w-[350px] h-screen transition-all duration-700`}>
        <i onClick={()=>setToggel(false)} className="ri-close-large-line absolute text-white right-4 top-4 cursor-pointer"></i>

        {
          menu.map((item, index)=>{
            return (
              <div key={index} onClick={()=>navigate(item.src)}
              className={`${pathname == item.src ? "bg-blue-700" : "bg-transparent"} flex items-center text-white cursor-pointer transition-all duration-200 hover:bg-blue-700 p-4`}>
                <i className={item.icon}></i>
                <p className="text-2xl">{item.text}</p>
              </div>
            );
          })
        }

      </div>
      {children}
    </div>
  );
};

export default Interface;
