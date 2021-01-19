import React from 'react';
import './App.css';
import Welcome from './components/Welcome/Welcome'
import Clock from './components/Clock/Clock'
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Welcome name="Alan" />
      <Clock />
      <Contact />
    </div>
  );
}

export default App;
