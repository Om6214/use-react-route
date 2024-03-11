import React from "react"

import {
  BrowserRouter,Routes,Route,Link
} from "react-router-dom";
import About from "./about";
import Counter from "../src/components/counter"
import Home from "./home"
import Contact from "./contact";


function App() {
  return (
    <div>
      
      <BrowserRouter>
      <nav>
        <li>
          <Link to="/home">Home</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </li>
      </nav>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/counter" element={<Counter/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;