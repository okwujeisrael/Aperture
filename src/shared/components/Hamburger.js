import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

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
          <li className="py-2">
          <NavLink to="/" className="hover:text-black hover:line-through active:text-black active">
            HOME
          </NavLink>
          </li>
          <li className="py-2">
          <NavLink to="/" className="hover:text-black hover:line-through active:text-black">
            ABOUT
          </NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/" className="hover:text-black hover:line-through active:text-black">
              PHOTOGRAPHERS
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/" className="hover:text-black hover:line-through active:text-black">
              PRICING
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/" className="hover:text-black hover:line-through active:text-black">
              CONTACT
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Hamburger
