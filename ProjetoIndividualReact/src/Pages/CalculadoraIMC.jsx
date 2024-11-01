import React, { useState } from 'react';

export default function CalculadoraIMC() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const alturaMetro = altura / 100;
    const  resultado = peso / (alturaMetro * alturaMetro);
    setImc(resultado.toFixed(2));

    if (resultado < 18.5) {
      setClassificacao('Sinto em informar, mas você está abaixo do peso ideal');
    } else if (resultado >= 18.5 && resultado < 24.9) {
      setClassificacao('Sua condição é chamada de Eutrofia. Isso significa que você está no seu peso adequado');
    } else if (resultado >= 25 && resultado < 29.9) {
      setClassificacao('Sinto em informar, mas você está com sobrepeso');
    } else if (resultado >= 30 && resultado < 34.9) {
      setClassificacao('Uma pena, você têm obesidade grau 1! Sugiro ir ao médico o mais rápido possível');
    } else if (resultado >= 35 && resultado < 39.9) {
      setClassificacao('Uma pena, você têm obesidade grau 1! Sugiro ir ao médico o mais rápido possível');
    } else if (resultado >= 40) {
      setClassificacao('Sua condição é séria! Você está com obedisidade extrema. Vá ao médico!');
    } else {
      setClassificacao('Por favor, digite os dados corretamente');
    }
  };

  return (
    <div className="container-central"> 
      <div>
        <label>
          Peso (kg):
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Exemplo: 70"
          />
        </label>
      </div>
      <div>
        <label>
          Altura (cm):
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Exemplo: 175"
          />
        </label>
      </div>
      <button onClick={calcularIMC}>Calcular IMC</button>
      {imc && (
        <div>
          <p>Seu IMC é: {imc}</p>
          <p>Sua classificação é: {classificacao}</p>
        </div>
      )}
    </div>
  );
}

