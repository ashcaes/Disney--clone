import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import {Routes, Route} from "react-router-dom";
import Details from './components/Details'
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
    </div>
  );
}

export default App;
