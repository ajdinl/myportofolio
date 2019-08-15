import React from 'react'
import Cv from './Cv';

const Home = () => {
  return (
    <div className='container'>
      <div className='d-flex justify-content-center p-4 mt-3'>
        <h3>Ajdin Lojić</h3>
      </div>
      <div className='d-flex justify-content-center'>
      <p>ReactJS Dev</p>
      </div>
      <hr/>        
      <Cv />
    </div>
  )
}

export default Home