import { Component } from 'react';
import './App.css';
import Navbar from "./Components/Navbar"
import Selectr from "./Pages/Selectr"
import Search from "./Pages/search"
import Home from "./Pages/Home"
import Login from './Pages/Login';
import {Route, Routes} from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar/>
      <div className ="container">
        <Routes>
          <Route path="/" element = {<Login />} />
          <Route path="/Home" element = {<Home />} />
          <Route path="/Search" element = {<Search />} />
          <Route path="/Select" element = {<Selectr />} />
        </Routes>
      </div>
    </div>
  )

}

export default App;
