import { Component } from 'react';
import './App.css';
import Navbar from "./Components/Navbar"
import Selectr from "./Pages/Selectr"
import Search from "./Pages/Search"
import Home from "./Pages/Home"
import {Route, Routes} from "react-router-dom"; 

function App() {
  return (
    <div>
      <Navbar/>
      <div className ="container">
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/search" element = {<Search />} />
          <Route path="/select" element = {<Selectr />} />
        </Routes>
      </div>
    </div>
  )

}

export default App;
