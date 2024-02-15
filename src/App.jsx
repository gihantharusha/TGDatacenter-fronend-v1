import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home'
import SingUp from "./Pages/SingUp";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Article from "./Pages/Article";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<Profile />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
