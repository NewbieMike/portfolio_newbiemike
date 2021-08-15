import React from "react";
import './App.scss';
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Homepage from "./components/HomePage/Homepage";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import Portfolio from "./components/Portfolio/Portfolio";

const App = () =>  {
  return (
    <div className="App">
      <Header />
      <MobileMenu />
      <Homepage id='Home'/>
      <Portfolio id='Portfolio' />
      <About id='About'/>
    </div>
  );
}

export default App;