import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Conocenos from "./pages/Conocenos";
import Tarifas from "./pages/Tarifas";
import Contacto from "./pages/Contacto";
import "./index.css";



function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <Routes>
          <Route path="/" element={<Conocenos />} />
          <Route path="/tarifas" element={<Tarifas />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
