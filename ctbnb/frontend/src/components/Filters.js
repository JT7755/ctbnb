import React from 'react'
import Filter from './Filter';
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
  return <div className="">
    <div className="flex justify-start sm:gap-4 gap-3 mt-4 pl-3">
        {sorting.map((obj) => (
            <Filter title={obj.title} icon={obj.icon} />
        ))}
    </div>
  </div>
}

export default Filters