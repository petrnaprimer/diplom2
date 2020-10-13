import React from 'react';
import logo from './logo.svg';
import './App.css';
import Top from "./Components/Top";
import SectionMain from "./Components/SectionMain";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Footer from "./Components/Footer";
function App() {
  return ( <div>
              <Top/>
              <SectionMain/>
              <Navbar/>
              <About/>
              <Footer/>
          </div>
  );
}

export default App;
