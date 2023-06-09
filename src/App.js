import React from "react";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/sidebar/Sidebar";
import Navbar from "./Components/navbar/Navbar";
import Home from "./Pages/home/Home";
import Admins from "./Pages/admins/Admins";

function App() {
  return (
    <div className="App">
      <Sidebar />

      <div className="pages-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admins" element={<Admins />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
