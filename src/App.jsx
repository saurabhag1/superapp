import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Registerpage from "./pages/registerpage";
import genre from "./pages/genre";
import Sample from "./pages/sample";
import Entir from "./pages/entir";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Registerpage />} />
        <Route path="/genre" element={<genre />} />
        <Route path="/sample" element={<Sample />} />
        <Route path="/entir" element={<Entir />} />
      </Routes>
    </>
  );
}

export default App;
