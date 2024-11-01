import React from "react";
import Header from "./components/Header";
import CalculadoraIMC from "./Pages/CalculadoraIMC";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <CalculadoraIMC />
      <Footer />
    </div>
  );
}
