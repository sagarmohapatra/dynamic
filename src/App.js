import React from 'react';
import './App.css';
import Sagar from './components/Form'


let App = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark purple-gradient d-flex justify-content-center">
        <h3 className="text-white text-center"> Registration Form</h3>
      </nav>
      <Sagar />
    </React.Fragment>
  )
}

export default App;
