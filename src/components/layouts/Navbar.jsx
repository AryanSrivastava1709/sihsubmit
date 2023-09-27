import React, { useEffect, useState } from 'react'
import { FiAlignJustify, FiXCircle } from "react-icons/fi";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [navVisible, setnavVisible] = useState(true);
  const links = [
    {
      id: 1,
      name: "Home"
    },
    {
      id: 2,
      name: "Test"
    },
    {
      id: 3,
      name: "Result"
    },
    {
      id: 3,
      name: "DashBoard"
    }
  ]

  useEffect(() => {
    if (location.pathname === "/signup" || location.pathname === "/login") {
      setnavVisible(false);
    }
  }, [])

  return (
    <>

      {navVisible && 
      <div className=" flex items-center justify-between text-white px-4 fixed bg-black w-full h-20  ">
        <div className='flex items-center justify-center cursor-pointer  '>
          <img src="https://shorturl.at/adxIM" alt="Exam" className=' h-[10vh] w-[50%] rounded-lg' />
          <div><p className=' mx-[-20px] font-extrabold capitalize text-xl hover:scale-110 delay-75 duration-100 animate-pulse hover:text-amber-400  '>Exam-Warden</p></div>
        </div>
        <div className="hidden md:flex text-2xl ">
          {links.map(({ name, id }) => {
            return (
              <div
                key={id}
                className="px-4 hover:text-amber-500 group cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 "
              >
                {name}
                <div className="group-hover:bg-gray-300  w-full h-1 "></div>
              </div>
            );
          })}
        </div>
        <div className=" md:hidden hover:animate-pulse backdrop-grayscale ">
          {
            nav ?
              <FiXCircle onClick={() => setNav(!nav)} className=" w-10 h-10 cursor-pointer" />
              :
              <FiAlignJustify onClick={() => setNav(!nav)} className=" w-10 h-10 cursor-pointer" />
          }
        </div>
        {nav && (
          <div className="flex md:hidden  text-2xl flex-col top-20 left-0 absolute w-[30%] h-screen bg-gradient-to-b py-5 from-black to-gray-800 text-gray-500  ">
            <div className=' flex flex-col items-center justify-center font-extrabold text-yellow-500 mb-8 '>
              <span className=" text-purple-600 text-4xl animate-pulse">Welcome</span>
              <p className=' text-3xl'>Student</p>
            </div>
            {links.map(({ name, id }) => {
              return (
                <div
                  key={id}
                  className="px-4 mx-3 hover:text-amber-500 group cursor-pointer  capitalize font-extrabold py-2 text-gray-500 hover:scale-105 duration-200 "
                >
                  {name}
                  <div className="group-hover:bg-gray-300  w-full h-1 "></div>
                </div>
              );
            })}
          </div>
        )}
      </div>}
    </>
  )
}

export default Navbar
