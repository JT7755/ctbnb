import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { GiWorld } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { IoSearchCircle } from "react-icons/io5";

const Navbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [place, setPlace] = useState('');
  const [time, setTime] = useState('');
  const [groupSize, setGroupSize] = useState('');

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  }

  const handleSignIn = (event) => {
    event.preventDefault(); // Prevent form from causing a page reload
    console.log('Email:', email, 'Password:', password);
    // Implement your sign-in logic here
  }

  return (
    <div className="border-b sticky top-0 z-50 bg-white/[95%]">
    <div className="flex justify-between items-center sm:mx-6 md:mx-10 bg-white-200">
        {/* Left */}
        <div className="h-20 flex">
            <img src={logo} className="object-cover"/>
        </div>
        {/* Middle */}
        <div className="hidden lg:flex justify-center items-center relative shadow-sm shadow-black-400 border rounded-full">
    <input
        type="search"
        placeholder=""
        className="py-2.5 w-[20rem] rounded-full outline-0"
    />
    <div className="flex justify-between absolute w-full pr-16 pl-6 font-semibold">
        <input
            type="text"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            placeholder="Place"
            className="w-full border-none bg-transparent text-center"
        />
        <input
            type="date"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="border-1 border-x px-6 text-center"
        />
        <input
            type="number"
            value={groupSize}
            onChange={(e) => setGroupSize(e.target.value)}
            placeholder="Group Size"
            className="w-full text-gray-600/60 text-center"
        />
    </div>
    <div className="bg-[green] p-2 rounded-full mr-1">
        <IoSearchCircle className="text-white" />
    </div>
</div>
        {/* Right */}
        <div className="flex items-center pr-3 font-semibold text-gray-600">
            <p>Rent House</p>
            <GiWorld className="mx-4"/>
            <div
              className="flex items-center border px-4 py-2 rounded-full gap-2 bg-[green]
              text-white font-bold shadow-lg shadow-gray-300 hover:bg-[gray]"
              onClick={togglePopup}
            >
                <p>Sign In</p>
                <FaUserCircle className="text-[24px]"/>
            </div>
        </div>
    </div>
    {isPopupOpen && (
      <div className="absolute top-20 right-5 w-96 bg-white p-8 border shadow-lg rounded-lg">
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <button type="submit" className="mt-4 px-4 py-2 bg-[green] text-white rounded hover:bg-green-700">
            Sign In
          </button>
          <button onClick={togglePopup} className="mt-4 ml-2 px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400">Close</button>
        </form>
      </div>
    )}
    </div>
  );
};

export default Navbar;
