import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { services } from '../services/auth'
const Navbar = () => {
  return (
    <>
      <ul className="flex p-4 shadow mb-8">
        <h1 className="flex font-bold items-center mr-auto">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-6 h-6 mr-2"
          >
            <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>Feedback Portal</span>
        </h1>
        <li className="  mr-2 md:mr-6">
          <NavLink className="text-teal-500 hover:text-teal-800" exact to="/" activeClassName="text-teal-800">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
          </NavLink>
        </li>
        <li className="  mr-2 md:mr-6">
          <NavLink className="text-teal-500 hover:text-teal-800" exact to="/newpost" activeClassName="text-teal-800">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
            </svg>
          </NavLink>
        </li>
        <li className="  mr-2 md:mr-6">
          <NavLink className="text-teal-500 hover:text-teal-800" exact to="/login" activeClassName="text-teal-800">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </NavLink>
        </li>
      </ul>
    </>
  )
}

export default Navbar
