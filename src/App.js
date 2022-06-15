import { Component } from 'react';
import './App.css';
import Navbar from "./Components/Navbar"
import Login from "./Pages/Login"
import Selectr from "./Pages/Selectr"
import Search from "./Pages/search"
import Home from "./Pages/Home"
import { Route, Routes} from "react-router-dom"; 

function App() {
  return (
    <div>
      <Navbar/>
      <div className ="container">
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/Search" element = {<Search />} />
          <Route path="/Select" element = {<Selectr />} />
          <Route path="/Login" element = {<Login />} /> {/* for testing purposes */}
        </Routes>
      </div>
    </div>
  )

};

export default App;
