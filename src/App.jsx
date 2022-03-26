import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Admin from "./components/Admin";
import Inicio from "./components/Inicio";
import Login from "./components/Login";
import Menu from "./components/Menu";


function App() {
  return (
    <div className="container">
      
      <Router>
        <Menu></Menu>

        <Routes>
          <Route exact path="/" element={<Inicio/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
