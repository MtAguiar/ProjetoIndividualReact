import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CalculadoraIMC from './CalculadoraIMC';


function Index() {
  return (
    <div>
      <Header />
      <CalculadoraIMC />
      <Footer />
    </div>
  );
}

export default Index;
