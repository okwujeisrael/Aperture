import React from 'react';
import { NavLink, Link } from "react-router-dom";

import Hamburger from './Hamburger';

const Navbar = () => {
  return (
    <nav className="bg-purple-400 text-xl text-white dosis-normal py-10 text-center">
      <Hamburger />
      <ul className="hidden md:flex justify-center list-none pb-7">
        <li className="pr-4">
          <NavLink to="/" className="hover:text-black hover:line-through active:text-black">
            HOME
          </NavLink>
        </li>
        <li className="px-4">
          <NavLink to="/about" className="hover:text-black hover:line-through active:text-black">
            ABOUT
          </NavLink>
          </li>
        <li className="px-4">
          <NavLink to="/pricing" className="hover:text-black hover:line-through active:text-black">
            PRICING
          </NavLink>
          </li>
        <li className="pl-4">
          <NavLink to="/contact" className="hover:text-black hover:line-through active:text-black">
            CONTACT
          </NavLink>
        </li>
      </ul>
      <Link to="/">
        <h1 className="text-3xl dosis-bold hover:text-black">APERTURE</h1>
        <p className="text-sm">CREATING FOND MEMORIES</p>
      </Link>
    </nav>
  )
}

export default Navbar;
