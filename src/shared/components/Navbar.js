import React from 'react';

import Hamburger from './Hamburger';

const Navbar = () => {
  return (
    <nav className="bg-purple-400 text-white dosis-normal py-10 text-center">
      <Hamburger />
      <ul className="hidden md:flex justify-center list-none pb-7">
        <li className="pr-4">HOME</li>
        <li className="px-4">ABOUT</li>
        <li className="px-4">PHOTOGRAPHERS</li>
        <li className="px-4">PRICING</li>
        <li className="pl-4">CONTACT</li>
      </ul>
      <a href="google.com" className="text-3xl dosis-bold">APERTURE</a>
      <p className="text-sm">FOND MEMORIES</p>
    </nav>
  )
}

export default Navbar;
