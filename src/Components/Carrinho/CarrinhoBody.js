import React from 'react';
import DateNow from '../Date/DateNow';
import styles from './CarrinhoBody.module.css';
import CarrinhoBodyFooter from './CarrinhoBodyFooter';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleExpanded,
  incrementar,
  updateItenslist,
} from '../../store/carrinho';
import ItemList from './ItemList';

const CarrinhoBody = ({ allItens }) => {
  const { dia, ano, monthString } = DateNow();
  const dispatch = useDispatch();
  const isExpanded = useSelector((state) => state.carrinho.isExpanded);
  const qtdeContador = useSelector((state) => state.carrinho.contador);
  const listItens = useSelector((state) => state.carrinho.listItens);
  const valorCarrinhoCents = useSelector(
    (state) => state.carrinho.valorCarrinho,
  );
  const valorCarrinhoReal = (valorCarrinhoCents / 100).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    currency: 'BRL',
  });

  React.useEffect(() => {
    const objItensLocalStorage = !!window.localStorage.getItem('listItens')
      ? JSON.parse(window.localStorage.getItem('listItens'))
      : {};
    if (!!Object.values(objItensLocalStorage).length) {
      allItens.forEach((item) => {
        const ItemLocalStorage = haveEspecificItemInLocalStorage(item.iditens);
        if (ItemLocalStorage) {
          const quantidadeItem = ItemLocalStorage.quantidade;
          const valorUnitarioItem = ItemLocalStorage.valorUnitario;
          const valorTotal = valorUnitarioItem * quantidadeItem;
          dispatch(
            incrementar({
              quantidadeItem: quantidadeItem,
              valorTotal: valorTotal,
            }),
          );
          const objPayload = {
            [item.iditens]: {
              nome: item.nome,
              quantidade: quantidadeItem,
              valorUnitario: valorUnitarioItem,
            },
          };
          dispatch(updateItenslist(objPayload));
        }
      });
    }

    function haveEspecificItemInLocalStorage(idItem) {
      if (!objItensLocalStorage[`${idItem}`]) return false;
      return objItensLocalStorage[`${idItem}`];
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`${styles.carrinho} ${styles.carrinhoPai}`}>
      <div
        className={`${styles.carrinho} ${styles.shadow} ${
          styles.carrinhoBody
        } ${styles.carrinhoElement} ${
          isExpanded && styles.carrinhoBodyClicked
        }`}
        onClick={() => dispatch(toggleExpanded())}
      >
        <div
          className={`${styles.divCarrinhoDetalhes} ${styles.carrinhoElementTop}`}
        >
          <div
            className={`${styles.carrinhosElementsInsideTop} ${styles.topLeft}`}
          >
            <div className={styles.dia}>{dia}</div>
            <div className={styles.separator}></div>
            <div className={styles.mesAno}>
              <div>{monthString}</div>
              <div>de {ano}</div>
            </div>
          </div>
          <div
            className={`${styles.carrinhosElementsInsideTop} ${styles.topRigth}`}
          >
            <div className={styles.divPaiTopRigth}>
              <div className={styles.iconCarrinho}>
                <div className={styles.iconCarrinhoIcon}>
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
                    style={{ color: '#5a6c7c', width: '27px', height: '27px' }}
                  >
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  <div
                    className={`${styles.quantidadeCarrinho} ${styles.quantidadeCarrinhoBody}`}
                  >
                    <span>{qtdeContador}</span>
                  </div>
                </div>
                <div className={styles.totalValor}>
                  <div>
                    <span className={styles.spanCarrinho}>Total</span>
                  </div>
                  <div className={styles.reaisValor}>
                    <span
                      className={`${styles.spanCarrinho} ${styles.spanCarrinhoReais}`}
                    >
                      R$
                    </span>
                    <span
                      className={`${styles.spanCarrinho} ${styles.spanCarrinhoValor}`}
                    >
                      {valorCarrinhoReal}
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.iconSetinhaDiv}>
                <svg
                  className={styles.iconSetinhaAnimation}
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    color: 'rgb(90, 108, 124)',
                    width: '25px',
                    height: '25px',
                  }}
                >
                  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                </svg>
                <div className={styles.separatorIconSetinhaDiv}></div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${styles.divCarrinhoDentro} ${styles.closeHideCarrinho} ${styles.carrinhoElement}`}
          style={isExpanded ? { display: 'flex' } : { display: 'none' }}
        >
          {Object.values(listItens).length > 0 ? (
            <>
              <div className={styles.diaSelecionado}>
                <span className={styles.diaSelecionadoDia}>
                  {dia} de {monthString} de {ano}
                </span>
                <span className={styles.diaSelecionadoText}>
                  Dia selecionado
                </span>
              </div>
              {Object.entries(listItens).map((item) => (
                <ItemList key={item[1]?.nome} item={item} />
              ))}
            </>
          ) : (
            <div className={styles.nenhumItemSelecionado}>
              Nenhum produto adiconado ao carrinho
            </div>
          )}

          {/* {Object.values(listItens).length > 0 ? (
            Object.entries(listItens).map((item) => (
              <ItemList key={item[1]?.nome} item={item} />
            ))
          ) : (
            <div className={styles.nenhumItemSelecionado}>
              Nenhum produto adiconado ao carrinho
            </div>
          )} */}

          {Object.values(listItens).length > 0 && (
            <div className={styles.bottomCarrinhoHideFinalizarCompra}>
              <button
                className={`${styles.buttonCarrinhoFooter} ${styles.buttonCarrinhoFooterLeft}`}
              >
                <span className={styles.outroDia}>Comprar para outro dia</span>
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
                  style={{ width: '17px', height: '17px', marginRight: '5px' }}
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </button>

              <button
                name="finalizar-venda"
                className={`${styles.buttonCarrinhoFooter} ${styles.buttonCarrinhoFooterRigth}`}
              >
                <span>Finalizar Compra</span>
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
                  style={{ width: '21px', height: '21px', marginTop: '2px' }}
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
      <CarrinhoBodyFooter></CarrinhoBodyFooter>
    </div>
  );
};

export default CarrinhoBody;
