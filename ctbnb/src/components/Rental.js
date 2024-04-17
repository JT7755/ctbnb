import React from 'react'
import { FaStar } from "react-icons/fa";

const Rental = ({ title, image, price}) => {
  return (
    <div className="">
    <div className="relative">
        <div className="grad absolute w-full h-full rounded-b-[1.3rem]"></div>
            <div className="flex ">
        {/*Background*/}
            <img src={image} alt=""
        className="object-cover rounded-[1.3rem] sm:max-h-[11rem] md:h-[14rem] w-full"
        /> 
        {/*Title*/}
        <div className="absolute text-white 
        font-bold bottom-6 left-2 text-[22px] flex items-center gap-2">
            {title}
            <span>&#x2022;</span>
            <p className="text-[20px]"> $
            {price}</p>
            </div>
        </div>
    </div> 
    {/*Description*/}
    <div className="pt-3 flex justify-between items-start">
        {/*Left*/}
        <div className="">
        <p className="max-w-[17rem] font-semibold">
        Fun place to stay have a blast!
        </p>
        <p className="max-w-[17rem] text-[16px] -mt-1">
            Mar 28 - April 29
        </p>
        <p className="max-w-[17rem] font-semibold text-[17px]">
            ${price}
        </p>
      </div>
      {/*Right*/}
      <div className="flex items-center space-x-1">
        <FaStar />
        <p className="text-[15px]">5.0</p>
      </div>
    </div>
    </div>
  )
}

export default Rental