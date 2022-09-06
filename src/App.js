import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
