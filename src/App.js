import React from "react";
import './index.css'
import './Responsive.css';
import Home from "./Page/Home";
import Contact from "./Components/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
