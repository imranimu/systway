import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './components/homepage'
import About from './components/about'
import Services from './components/services'
import Projects from './components/projects'
import Contact from './components/contact'

import './App.css';

function App() {
  return (
    <div>        
        <Router>                                        
            <div> 
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
                <Route path="/projects" component={Projects} />                        
                <Route path="/contact" component={Contact} />                        
              </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
