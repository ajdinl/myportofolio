import React from 'react'

const Home = () => {
  return (
    <div className='bg-color'>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div className='container vh-100'>
        <div className='d-flex justify-content-center text-white p-4 ml-4'>
          <h1>Hello, I'm Ajdin</h1>
        </div>
        <div className='d-flex justify-content-center text-white ml-4'>
        <p>React and Node Dev</p>
        </div>
        <div className='d-flex justify-content-center ml-4 pb-3'>
          <a className='text-white m-1' href="https://github.com/ajdinl/" target='blank'><i class="fab fa-github fa-2x"></i></a>
          <a className='text-white m-1' href="https://dev.to/ajdinl" target='blank'><i class="fab fa-dev fa-2x"></i></a>                  
        </div>      
      </div>
    </div>
  )
}

export default Home