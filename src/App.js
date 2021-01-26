import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Navigation from "./components/Navigation/Navigation";
import Welcome from './components/Welcome/Welcome'
import Clock from './components/Clock/Clock'
import Contact from "./components/Contact/Contact";
import $404 from "./components/404/404";


function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route 
        path="/" 
        exact 
        render={(props) => <Welcome {...props} name="Alan" />} />
        <Route path ="/clock" component={Clock} />
        <Route path ="/contact" component={Contact} />
        <Route path="/welcome/:name" component={Welcome} />
        <Route path="/404" component={$404} />
      </Switch>
    </div>
  );
}

export default App;
