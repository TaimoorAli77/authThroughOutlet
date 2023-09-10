import  { Component } from 'react';
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './About';
import Login from './Login';
import Home from './Home';
import PrivateRoute from './auth/PrivateRoute';

class App extends Component {
  render() {
    return (
      <div>
 <BrowserRouter>
      <Routes>
        <Route  element={<PrivateRoute />}>
          <Route  path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
        </Route>

          <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>


      </div>
      
      
    );
  }
}

export default App;
