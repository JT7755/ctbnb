import React from 'react'

const Filter = ({icon, title}) => {
  return (
    <div className="flex items-center text-white bg-[green] 
    hover:bg-white hover:text-[green] hover:font-bold gap-2 py-1 px-3 sm:px-4 
    duration-200 ease-out rounded-full">
      {icon}
      {title}
      </div>
  )
}

export default Filter