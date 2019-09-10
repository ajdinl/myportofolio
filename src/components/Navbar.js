import React from 'react'

const Navbar = () => {
  return (
    <div className='nav sticky-top bg-color'>
      <a className="nav-link text-white ml-1" href="/">Home</a>
      <a className="nav-link text-white" href="/biography">Biography</a>
    </div>
  )
}

export default Navbar