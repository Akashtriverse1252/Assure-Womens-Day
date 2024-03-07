import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/css/font/stylesheet.css";
import "../src/css/stylesheet.css";
import "../src/css/Footer.css";
import "../src/css/Responsive.css";
import { Home } from "./Home";

function App() {
  return (
    <>
      <Router basename="/womens-day">
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
