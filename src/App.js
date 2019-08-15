import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Questions from './components/Questions'

function App() {
  return (  
    <Router>
      <div>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/questions' component={Questions} />
      </div>
    </Router>
  )
}

export default App