import React from 'react';
import './App.css';
import ContainerCards from './Components/Cards/ContainerCards';
import CarrinhoBody from './Components/Carrinho/CarrinhoBody';
import GruposNavegacao from './Components/Navegacao/GruposNavegacao';

function App() {
  return (
    <div className="bodyPage">
      <CarrinhoBody></CarrinhoBody>
      <GruposNavegacao></GruposNavegacao>
      <ContainerCards></ContainerCards>
    </div>
  );
}

export default App;
