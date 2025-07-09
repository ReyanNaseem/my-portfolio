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
  
  const {pathname} = useLocation()
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center relative bg-[#1c1c1c] overflow-x-hidden w-full min-h-[100vh] px-[6vw]">
      <div className="fixed flex flex-col items-end gap-4 z-50 top-[50%] -translate-y-[50%] right-[2%] text-white w-[180px]">
        {menu.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-end"
              onClick={() => {
                navigate(item.src);
              }}
            >
              <p className={`group flex items-center justify-end w-[60px] h-[60px]  rounded-full ${pathname==item.src? 'bg-blue-700' : 'bg-gray-700'} hover:bg-blue-700 cursor-pointer transition-all duration-700 hover:w-[180px] relative`}>
                <span className="absolute left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 whitespace-nowrap text-2xl">
                  {item.text}
                </span>
                <i className={item.icon}></i>
              </p>
            </div>
          );
        })}
      </div>

      {children}
    </div>
  );
};

export default Interface;
