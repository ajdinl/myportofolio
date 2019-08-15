import React from 'react'

const Navbar = () => {
  return (
    <div className='nav sticky-top bg-info' >
      <a className="nav-link text-white ml-1" href="/">Home</a>
      <a className="nav-link text-white" href="/questions">Questions</a>
    </div>
  )
}

export default Navbar