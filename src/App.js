import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Route } from 'react-router-dom';
import Index from './Views/Index';

import './App.scss';

function App() {
  return (
    <BrowserRouter className="App">
      <div className="App-header">

        <NavBar />

        <Route path='/' component={Index} />

      </div>
    </BrowserRouter>
  );
}

export default App;
