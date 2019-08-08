import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Questions from './Questions'

function App() {
  return (  
    <BrowserRouter>
      <div>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/questions' component={Questions} />
      </div>
    </BrowserRouter>
  )
}

export default App