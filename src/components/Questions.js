import React from 'react'
import Footer from './Footer';

const Questions = () => {
  return (  
    <div>
      <div className='container align-middle'>
        <div className='d-flex justify-content-center p-4'>
          <h3>Questions about me:</h3>
        </div>
        <div className='d-flex justify-content-center'>
        <form>
            <input type='radio' /> Direktor Microsofta? :D <br/>
            <input type='radio' /> Boban? <br/>
            <input type='radio' /> Nesto 3ce? <br/>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Questions