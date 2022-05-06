import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Asteroids from "./pages/Asteroids";
import Picture from "./pages/Picture";
import Home from "./pages/Home";
import Header from "./containers/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="asteroids" element={<Asteroids />} />
          <Route path="picture" element={<Picture />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
