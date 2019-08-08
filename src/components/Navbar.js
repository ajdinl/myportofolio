import React from 'react'

const Navbar = () => {
  return (
    <div className='container' >
      <nav className='navbar navbar-expand-lg navbar-light bg-light mb-4 pl-4'>
      <a className='navbar-brand' href='/'>Home</a>
      <a className='navbar-brand' href='/questions'>Questions</a>
      </nav>
    </div>
  )
}

export default Navbar