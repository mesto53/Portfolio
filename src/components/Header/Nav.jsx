import React from 'react'
import { NavLink  } from 'react-router-dom';


export default function Nav() {
    return (
        <nav className=" md:flex items-center space-x-5">
        <NavLink className="text-white font-[600]" to="/">
          About
        </NavLink>
        <NavLink className="text-white font-[600]" to="/services">
          Services
        </NavLink>
        <NavLink className="text-white font-[600]" to="/portfolio">
          Portfolio
        </NavLink>
        <NavLink className="text-white font-[600]" to="/contact">
          Contact
        </NavLink>
      </nav>
    )
}
