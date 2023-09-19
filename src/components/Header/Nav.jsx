import React from 'react'
import { NavLink  } from 'react-router-dom';


export default function Nav() {
    return (
        <nav className="md:flex items-center space-x-5 overflow-x-auto">
        <NavLink className="text-white" to="/">
          About
        </NavLink>
        <NavLink className="text-white" to="/services">
          Services
        </NavLink>
        <NavLink className="text-white" to="/portfolio">
          Portfolio
        </NavLink>
        <NavLink className="text-white" to="/contact">
          Contact
        </NavLink>
      </nav>
    )
}
