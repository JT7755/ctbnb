import React from 'react'
import { FaFire } from "react-icons/fa";
import { FaTree } from "react-icons/fa";
import { FaWater } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { RiAliensFill } from "react-icons/ri";

const Filters = () => {
    const sorting = [
        {title: "Trending", icon: <FaFire/> },
        {title: "Forest", icon: <FaTree/> },
        {title: "Waterfront", icon: <FaWater/> },
        {title: "Key Houses", icon: <FaKey/> },
        {title: "Unique", icon: <RiAliensFill/> },
    ];
  return <div className="sm:mx-6 md:mx-10 lg:mx-12">
    <div className="">
        {sorting.map((obj) => (
            <Filters />
        ))}
    </div>
  </div>
}

export default Filters