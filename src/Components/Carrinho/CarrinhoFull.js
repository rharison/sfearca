import React from 'react';
import DateNow from '../Date/DateNow';
import styles from './CarrinhoFull.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleExpanded } from '../../store/carrinho';

const CarrinhoFull = ({ isShow }) => {
  const isExpanded = useSelector((state) => state.carrinho.isExpanded);
  const dispatch = useDispatch();
  const { dia, ano, monthString } = DateNow();

  function handleClick() {
    window.scroll({
      top: 400,
    });
    if (!isExpanded) {
      dispatch(toggleExpanded());
    }
  }
  return (
    <div
      className={`${styles.carrinho} ${styles.carrinhoNav}`}
      style={{ top: isShow ? 0 : '-90px', transition: '0.5s ease' }}
      onClick={handleClick}
    >
      <div className={`${styles.carrinhosElementsInsideTop} ${styles.topLeft}`}>
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
                style={{ width: '27px', height: '27px', color: '#5a6c7c' }}
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <div
                className={`${styles.quantidadeCarrinho} ${styles.quantidadeCarrinhoNav}`}
              >
                0
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
                  0,00
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
  );
};

export default CarrinhoFull;
