import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NaveBar from "./components/headers/NaveBar";
import Home from "./pages/home";

function App() {
  return (
    <>
      <NaveBar />
      <Home></Home>
    </>
  );
}

export default App;
