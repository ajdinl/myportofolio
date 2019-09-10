import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Biography from './components/Biography'
import './App.css'

function App() {
  return (  
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/biography' component={Biography} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </Router>
  )
}

export default App