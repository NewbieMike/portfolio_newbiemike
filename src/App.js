import React from "react";
import './App.scss';
import Header from "./components/Header/Header";
import Homepage from "./components/HomePage/Homepage";

const App = () =>  {
  return (
    <div className="App">
      <Header />
      <Homepage id='Home'/>
    </div>
  );
}

export default App;