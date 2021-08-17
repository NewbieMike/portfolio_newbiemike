import React from "react";
import './App.scss';
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
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
      <Contact id='Contact'/>
      <Footer id='Footer'/>
    </div>
  );
}

export default App;