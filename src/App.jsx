import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Registerpage from "./pages/registerpage";

import Sample from "./pages/sample";
import Entir from "./pages/entir";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movies/MoviesPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Registerpage />} />
        <Route path="/sample" element={<Sample />} />
        <Route path="/entir" element={<Entir />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movie />} />
      </Routes>
    </>
  );
}

export default App;
