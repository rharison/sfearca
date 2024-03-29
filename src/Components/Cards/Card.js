import React from 'react';
import styles from './Card.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementar,
  decrementar,
  updateItenslist,
  deleteItemList,
} from '../../store/carrinho';

const Card = ({ item }) => {
  let idadeAltura;
  const isValorSameOriginal = true;
  const valorVendaItem = item.tarifarios[0].valor;
  const dispatch = useDispatch();
  const listItens = useSelector((state) => state.carrinho.listItens);
  const [itemListRedux, setItemListRedux] = React.useState(null);

  React.useEffect(() => {
    setItemListRedux(haveEspecificItemInReduxList(item.iditens));
    function haveEspecificItemInReduxList(idItem) {
      return listItens[`${idItem}`];
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listItens]);

  function handleClickAddOrSub(operation) {
    const objPayload = {
      [item.iditens]: {
        nome: item.nome,
        quantidade: 0,
        valorUnitario: valorVendaItem,
      },
    };

    const updateItem = {
      comprar: () => {
        dispatch(incrementar(valorVendaItem));
        objPayload[item.iditens].quantidade = 1;
        dispatch(updateItenslist(objPayload));
      },
      add: () => {
        dispatch(incrementar(valorVendaItem));
        objPayload[item.iditens].quantidade = itemListRedux.quantidade;
        objPayload[item.iditens].quantidade++;
        dispatch(updateItenslist(objPayload));
      },
      sub: () => {
        dispatch(decrementar(valorVendaItem));
        objPayload[item.iditens].quantidade = itemListRedux.quantidade;
        if (objPayload[item.iditens].quantidade === 1) {
          dispatch(deleteItemList(item.iditens));
        } else {
          objPayload[item.iditens].quantidade--;
          dispatch(updateItenslist(objPayload));
        }
      },
      default: () => {
        return null;
      },
    };
    return updateItem[operation]
      ? updateItem[operation]()
      : updateItem['default']();
  }

  const addVirgula = (valor) => {
    return valor === 0
      ? '0,00'
      : (valor / 100)
          .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
          .split(/\s/)[1];
  };

  item.itens.produtos.forEach((objectItem) => {
    let alturaMinima = objectItem['altura_minima']
      .toString()
      .replace(/(\d{1})(\d{2})/, '$1.$2');

    if (objectItem['altura_minima'])
      idadeAltura = `A partir de ${alturaMinima ?? ''}m`;
  });

  if (idadeAltura == null) {
    item.itens.ingressos.forEach((objectItem) => {
      if (objectItem['idade_minima'] && objectItem['idade_maxima'])
        idadeAltura = `${objectItem['idade_minima'] ?? ''} a ${
          objectItem['idade_maxima'] ?? ''
        } anos`;
      else if (objectItem['idade_minima']) {
        idadeAltura = `A partir de ${objectItem['idade_minima'] ?? ''} anos`;
      } else {
        idadeAltura = `Idade máxima ${objectItem['idade_maxima'] ?? ''} anos`;
      }
    });
  }

  return (
    <section className={`${styles.card} ${styles.shadow}`}>
      <div className={`${styles.cardImg}`} value={item.iditens}>
        <img className={styles.imgCard} src={item.imagem} alt="" />
      </div>
      <div className={styles.cardDivCorpo}>
        <div className={styles.nomePreco}>
          <strong>{item.nome}</strong>
          {!isValorSameOriginal ? (
            <div className={styles.precosCard}>
              <span className={styles.precoRiscado}>
                R${addVirgula(valorVendaItem)}
              </span>
              <span className={styles.precoDestaque}>
                <span className={styles.tipoMoeda}>R$</span>
                {addVirgula(valorVendaItem)}
              </span>
            </div>
          ) : (
            <div className={styles.precosCard}>
              <span className={styles.precoDestaque}>
                <span className={styles.tipoMoeda}>R$</span>
                {addVirgula(valorVendaItem)}
              </span>
              <span className={styles.divididoEmAte}>em até {6}x</span>
            </div>
          )}
        </div>

        <div className={styles.cardDescricao}>{item.descricao}</div>
      </div>
      <div className={styles.termos}>
        <div>
          <svg
            className={styles.iconTermos}
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
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span>{idadeAltura}</span>
        </div>
        <div>
          <svg
            className={styles.iconTermos}
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
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          <span>Regras e condições</span>
        </div>
      </div>
      <div className={styles.cardDivButton}>
        <div className={styles.divCardButtonElements}>
          <button
            className={styles.buttonCardFull}
            id={item.iditens}
            value={item.iditens}
            style={itemListRedux ? { display: 'none' } : { display: 'block' }}
            onClick={() => handleClickAddOrSub('comprar')}
          >
            Comprar
          </button>
          <div
            id={item.iditens}
            style={itemListRedux ? { display: 'flex' } : { display: 'none' }}
            className={`${styles.paiButtonCardCompra} ${styles.paiButtonCardCompraAfter}`}
          >
            <button
              value={item.iditens}
              className={`${styles.buttonCard} ${styles.buttonCardLateral} ${styles.buttonEsquerdo}`}
              onClick={() => handleClickAddOrSub('sub')}
            >
              -
            </button>
            <span className={styles.spanText}>{itemListRedux?.quantidade}</span>
            <button
              value={item.iditens}
              className={`${styles.buttonCard} ${styles.buttonCardLateral} ${styles.buttonDireito}`}
              onClick={() => handleClickAddOrSub('add')}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Card;
