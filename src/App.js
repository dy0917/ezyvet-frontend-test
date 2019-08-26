import React from 'react';
import Routes from './routes'
import {BrowserRouter } from 'react-router-dom';
import Nav from "./components/Nav"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
