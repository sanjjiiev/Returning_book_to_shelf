import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import InfoPage from "./InfoPage";
import HabitsPage from "./HabitsPage";
import DemoPage from "./DemoPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/info">Info</Link>
        <Link to="/habits">Habits</Link>
        <Link to="/demo">Demo</Link>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/habits" element={<HabitsPage />} />
        <Route path="/demo" element={<DemoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
