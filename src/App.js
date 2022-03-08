import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import CarrinhoBody from './Components/Carrinho/CarrinhoBody';
import GruposNavegacao from './Components/Navegacao/GruposNavegacao';
import Loading from './Components/Loading';
import Error from './Components/Error';
import { fetchProdutos, onlyAllGroups } from './store/produtos';
import DateNow from './Components/Date/DateNow';
import { itensForGroups } from './store/produtos';
import Card from './Components/Cards/Card';
import CarrinhoFull from './Components/Carrinho/CarrinhoFull';

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

  const ItensforGroups = useSelector(itensForGroups);
  const grupos = useSelector(onlyAllGroups);
  const [idGroupSelecionado, setidGroupSelecionado] = React.useState('');
  React.useEffect(() => {
    setidGroupSelecionado(grupos && grupos[0].id);
  }, [grupos]);

  function alternateTab(id) {
    setidGroupSelecionado(id);
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [positionScroll, setPositionScroll] = React.useState(0);
  function handleScroll() {
    setPositionScroll(window.scrollY);
  }

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <div className="bodyPage">
        <CarrinhoFull isShow={positionScroll >= 420} />
        <CarrinhoBody />
        <GruposNavegacao alternateTab={alternateTab} />
        <div className="cards">
          {ItensforGroups[idGroupSelecionado]?.map((item) => (
            <Card key={item.iditens} item={item} />
          ))}
        </div>
      </div>
    );
  else return null;
}

export default App;
