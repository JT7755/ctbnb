import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";


const Footer = () => {
    const icons = [<FaInstagramSquare/>, <FaSquareXTwitter/>, <FaFacebookSquare/>]
  return (
    <div className="bg-white border-t-2 shadow-md shadow-gray-300 sticky
    bottom-0 h-20 w-full flex items-center justify-center gap-6">
    {icons.map((icon) => (
        <div className="text-[30px] text-gray-600 hover:text-black">{icon}</div>
    ))}
    </div>
  )
}

export default Footer