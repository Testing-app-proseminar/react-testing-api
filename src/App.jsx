import { useState } from "react";
import "./App.css";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CardsPage from "./pages/CardsPage";
import Navbar from "./components/Navbar";
import IsPrivate from "./components/IsPrivate";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/cards" element={< CardsPage />} />
      </Routes>
    </>
  );
}

export default App;
