import { useState } from "react";
import "./App.css";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CardsPage from "./pages/CardsPage";
import Navbar from "./components/Navbar";
import IsPrivate from "./components/IsPrivate";
import CardDetailsPage from "./pages/CardDetailsPage";
import EditCardPage from "./pages/EditCardPage";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/cards" element={< CardsPage />} />
        <Route path="/cards/:cardId" element={<CardDetailsPage/>}/>
        <Route path="/cards/:cardId/edit" element={<EditCardPage/>}/>
      </Routes>
    </>
  );
}

export default App;
