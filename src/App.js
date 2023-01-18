import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Home from './Pages/Home.js'
import { Routes, Route, HashRouter } from "react-router-dom";
import Detail from "./Pages/Detail";

function App() {


  return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home ></Home>} />
          <Route path="/detail" element={<Detail></Detail>} />
        </Routes>
      </HashRouter>

  );
}

export default App;
