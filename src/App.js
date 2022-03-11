import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import CarrinhoBody from './Components/Carrinho/CarrinhoBody';
import GruposNavegacao from './Components/Navegacao/GruposNavegacao';
import Loading from './Components/Loading';
import Error from './Components/Error';
import { fetchProdutos, onlyAllGroups, onlyAllItens } from './store/produtos';
import DateNow from './Components/Date/DateNow';
import { itensForGroups } from './store/produtos';
import Card from './Components/Cards/Card';
import CarrinhoFull from './Components/Carrinho/CarrinhoFull';
import { toggleExpanded } from './store/carrinho';

function App() {
  const isExpanded = useSelector((state) => state.carrinho.isExpanded);
  const { loading, error, data } = useSelector((state) => state.produtos);
  const dispatch = useDispatch();
  const allItens = useSelector(onlyAllItens);
  const ItensforGroups = useSelector(itensForGroups);
  const grupos = useSelector(onlyAllGroups);
  const [idGroupSelecionado, setidGroupSelecionado] = React.useState('');
  const [positionScroll, setPositionScroll] = React.useState(0);

  this.test = 0;

  React.useEffect(() => {
    const { dateNow } = DateNow();
    dispatch(fetchProdutos(dateNow));
  }, [dispatch]);

  React.useEffect(() => {
    setidGroupSelecionado(grupos && grupos[0].id);
  }, [grupos]);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleClickFloatButton() {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }

  function handleScroll() {
    setPositionScroll(window.scrollY);
  }

  function alternateTab(id) {
    setidGroupSelecionado(id);
  }

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <div className="bodyPage">
        <div
          className="full"
          onClick={() => dispatch(toggleExpanded())}
          style={{ pointerEvents: !isExpanded ? 'none' : 'initial' }}
        ></div>
        <CarrinhoFull isShow={positionScroll >= 420} />
        <CarrinhoBody allItens={allItens} />
        <GruposNavegacao alternateTab={alternateTab} />
        <div className="cards">
          {ItensforGroups[idGroupSelecionado]?.map((item) => (
            <Card key={item.iditens} item={item} />
          ))}
        </div>
        {positionScroll >= 420 && (
          <button className="floatButton" onClick={handleClickFloatButton}>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </button>
        )}
      </div>
    );
  else return null;
}

export default App;
