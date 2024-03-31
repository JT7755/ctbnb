import React from 'react';
import logo from '../assets/logo.png';
import { GiWorld } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { IoSearchCircle } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="border-b">
    <div className="flex justify-between items-center sm:mx-6 md:mx-10 bg-white-200">
        {/* Left */}
        <div className="h-20 flex">
            <img src={logo} className="object-cover"/>
        </div>
        {/* Middle */}
        <div className="hidden lg:flex justify-center items-center relative shadow-sm shadow-black-400 border rounded-full">
            <input type="search"
            placeholder=""
            className="py-2.5 w-[20rem] rounded-full outline-0"
            />
            <div className="flex justify-between absolute w-full pr-16 pl-6 font-semibold">
                <button className="w-full">Place</button>
                <button className="border-1 border-x px-6">Time</button>
                <button className="w-full text-gray-600/60 pl-2">Group Size</button>
            </div>
            <div className="bg-[green] p-2 rounded-full mr-1">
                <IoSearchCircle className="text-white" />
            </div>
        </div>
        {/* Right */}
        <div className="flex  items-center pr-3 font-semibold text-gray-600">
            <p>Rent House</p>
            <GiWorld className="mx-4"/>
            <div className="flex items-center border px-4 py-2 rounded-full gap-2 bg-[green]
             text-white font-bold shadow-lg shadow-gray-300 hover:bg-[gray]">
                <p>Sign In</p>
                <FaUserCircle className=" text-[24px]"/>
            </div>
        </div>
    </div>
    </div>
  )
};

export default Navbar;