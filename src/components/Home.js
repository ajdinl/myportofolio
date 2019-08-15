import React from 'react'
import myimage from  '../myimg.jpg'
import Cv from './Cv';

const Home = () => {
  return (
    <div className='container'>
      <div className='float-right mr-4 mt-2'>
        <img src={myimage} alt='myImage' className='rounded border'/>
      </div>
      <div className='d-flex justify-content-center p-4 ml-4 mt-3'>
        <h3>Ajdin Lojić</h3>
      </div>
      <div className='d-flex justify-content-center ml-4'>
      <p>ReactJS Dev</p>
      </div>
      <hr/>        
      <Cv />
    </div>
  )
}

export default Home