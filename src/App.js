import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>This is the homepage</h1>} exact>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
