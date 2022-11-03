import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Header />
      <AppBody>
      <Routes>
          <Route path="/" element={<Header />} exact>
          </Route>
        </Routes>
      </AppBody>
      </BrowserRouter>
    </div>
  );
}

export default App;

const AppBody = styled.div`

`