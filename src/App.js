import React from "react";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./Components/sidebar/Sidebar";
import Navbar from "./Components/navbar/Navbar";
import Home from "./Pages/home/Home";

function App() {
  return (
    <div className="App">
      <Sidebar />

      <div className="pages-container">
        <Navbar />
        <Home />
      </div>
    </div>
  );
}

export default App;
