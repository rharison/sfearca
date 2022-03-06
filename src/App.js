import React from 'react';
import './App.css';
import ContainerCards from './Components/Cards/ContainerCards';
import CarrinhoBody from './Components/Carrinho/CarrinhoBody';

function App() {
  return (
    <div className="bodyPage">
      <CarrinhoBody></CarrinhoBody>
      <ContainerCards></ContainerCards>
    </div>
  );
}

export default App;
