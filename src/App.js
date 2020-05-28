import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Route } from 'react-router-dom';
import Index from './Views/Index';
import Top from './Components/Top/Top';
import Loader from './Views/Loader/Loader';

import './App.scss';

function App() {
  return (
    <BrowserRouter className="App">

      <NavBar />
      <Loader />

      <Route path='/' component={Index} />
      <Top />

    </BrowserRouter>
  );
}

export default App;
