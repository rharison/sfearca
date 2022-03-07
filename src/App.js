import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ContainerCards from './Components/Cards/ContainerCards';
import CarrinhoBody from './Components/Carrinho/CarrinhoBody';
import GruposNavegacao from './Components/Navegacao/GruposNavegacao';
import Loading from './Components/Loading';
import Error from './Components/Error';
import { fetchProdutos } from './store/produtos';
import DateNow from './Components/Date/DateNow';

function App() {
  const floatButton = document.querySelector('.float-button');
  floatButton.addEventListener('click', () => {
    const topDistance = 0;
    window.scroll({
      top: topDistance,
      behavior: 'smooth',
    });
  });
  const { loading, error, data } = useSelector((state) => state.produtos);
  const dispatch = useDispatch();
  React.useEffect(() => {
    const { dateNow } = DateNow();
    dispatch(fetchProdutos(dateNow));
  }, [dispatch]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <div className="bodyPage">
        <CarrinhoBody></CarrinhoBody>
        <GruposNavegacao></GruposNavegacao>
        <ContainerCards></ContainerCards>
      </div>
    );
  else return null;
}

export default App;
