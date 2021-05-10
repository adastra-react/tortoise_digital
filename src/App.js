import React from 'react';
import Home from '../src/Components/Home';
import Agency from '../src/Components/Agency';
import Contact from '../src/Components/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/agency">
            <Agency />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
