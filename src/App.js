import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Home from './Pages/Home.js'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Detail from "./Pages/Detail";

function App() {


  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home ></Home>} />
          <Route path="/detail" element={<Detail></Detail>} />
        </Routes>
      </Router>

  );
}

export default App;
