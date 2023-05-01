import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import './App.scss'
import Home from "./pages/Home";
import Project from "./pages/Project";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/project/:projectname" element={<Project/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
