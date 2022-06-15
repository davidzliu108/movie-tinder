import { Component } from 'react';
import './App.css';
import Navbar from "./Components/Navbar"
import Login from "./Pages/Login"
import Selectr from "./Pages/Selectr"
import Search from "./Pages/search"
import Home from "./Pages/Home"
<<<<<<< HEAD
import { Route, Routes} from "react-router-dom"; 
=======
import {Route, Routes} from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> ca451ced7f430a526a2a31286a126b2ef4b43ab8

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
