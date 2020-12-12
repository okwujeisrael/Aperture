import React, { useState } from 'react';


const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  } 

  return (
    <div className="pb-4 md:hidden">
      <button className="text-center border rounded px-1" onClick={handleClick}>
        <svg viewBox="0 0 100 80" width="40" height="40" className="fill-current inline-block">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      </button>

      {isOpen && (
        <ul className="text-center list-none pb-7">
          <li className="py-2">HOME</li>
          <li className="py-2">ABOUT</li>
          <li className="py-2">PHOTOGRAPHERS</li>
          <li className="py-2">PRICING</li>
          <li className="py-2">CONTACT</li>
        </ul>
      )}
    </div>
  )
}

export default Hamburger
