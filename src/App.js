import React from 'react';
import './App.css';
import Top from "./Components/Top";
import SectionMain from "./Components/SectionMain";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Footer from "./Components/Footer";
import {BrowserRouter} from "react-router-dom";
function App() {
  return ( <div>
          <BrowserRouter>
              <Top/>
              <SectionMain/>
              <Navbar/>
              <About/>
              <Footer/>
          </BrowserRouter>
          </div>
  );
}

export default App;
