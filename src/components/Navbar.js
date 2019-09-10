import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='nav sticky-top bg-color'>
      <Link to={'/'} className="nav-link text-white ml-1">Home</Link>
      <Link to={'/biography'} className="nav-link text-white">Biography</Link>
    </div>
  )
}

export default Navbar