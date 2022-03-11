import React from 'react';
import styles from './ItemList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleExpanded,
  deleteItemList,
  decrementar,
} from '../../store/carrinho';

const ItemList = ({ item }) => {
  const listItens = useSelector((state) => state.carrinho.listItens);
  const dispatch = useDispatch();
  const idItem = item[0];
  const propriedadesItem = item[1];
  const addVirgula = (valor) => {
    return valor === 0
      ? '0,00'
      : (valor / 100)
          .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
          .split(/\s/)[1];
  };

  function handleClickIconDeleteIten() {
    dispatch(deleteItemList(idItem));
    dispatch(
      decrementar({
        quantidade: propriedadesItem.quantidade,
        valorTotal:
          propriedadesItem.quantidade * propriedadesItem.valorUnitario,
      }),
    );

    const haveMoreItemInList = Object.values(listItens).length === 1;
    if (!haveMoreItemInList) dispatch(toggleExpanded());
  }

  return (
    <div className={styles.listItensCarrinho}>
      <div className={styles.listItensCarrinhoLeft}>
        {' '}
        {propriedadesItem.nome}
      </div>
      <div className={styles.listItensCarrinhoRigth}>
        <span>{propriedadesItem.quantidade}x</span>
        <span>R$ {addVirgula(propriedadesItem.valorUnitario)}</span>
        <div className={styles.itemSvg}>
          <svg
            name={propriedadesItem.nome}
            className={styles.deleteItemCarrinho}
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleClickIconDeleteIten}
          >
            <polyline
              className={styles.itemSvg}
              points="3 6 5 6 21 6"
            ></polyline>
            <path
              className={styles.itemSvg}
              d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
            ></path>
            <line
              className={styles.itemSvg}
              x1="10"
              y1="11"
              x2="10"
              y2="17"
            ></line>
            <line
              className={styles.itemSvg}
              x1="14"
              y1="11"
              x2="14"
              y2="17"
            ></line>
          </svg>
        </div>
      </div>
    </div>
  );
};
export default ItemList;
