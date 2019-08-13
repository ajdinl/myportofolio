import React from 'react'

const Navbar = () => {
  return (
    <div className='container nav sticky-top bg-light mb-4' >
      <a className="nav-link text-dark" href="/">Home</a>
      <a className="nav-link text-dark" href="/questions">Questions</a>
    </div>
  )
}

export default Navbar