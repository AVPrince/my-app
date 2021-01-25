import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';

import Navigation from "./components/Navigation/Navigation";
import Welcome from './components/Welcome/Welcome'
import Clock from './components/Clock/Clock'
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <div className="App">
      <Navigation />
      <Route path="/" exact component={Welcome}/>
      <Route path ="/clock" component={Clock} />
      <Route path ="/contact" component={Contact} />
    </div>
  );
}

export default App;
