import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/post/:id" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/cadastro" element={<Register/>} />
    </Routes>
  );
};