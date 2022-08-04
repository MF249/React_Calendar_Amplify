import './App.css';
import React, { useState } from 'react';
import Heading from './components/heading';
import Calendar from './components/calendar';
import Button from "react-bootstrap/Button";

function App() {

  return (
    
    <div className="App">
      <div className="App-header">
        <Heading />
      </div>
      <div className="App-taskbar">
        <Button variant="success">Save</Button>&nbsp;
        <Button variant="primary">Share</Button>&nbsp;
      </div>
      <Calendar />
    </div>
  );
}

export default App;
