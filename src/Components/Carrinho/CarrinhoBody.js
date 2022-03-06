import React from 'react';
import styles from './CarrinhoBody.module.css';
import CarrinhoBodyFooter from './CarrinhoBodyFooter';

const CarrinhoBody = () => {
  return (
    <div className={`${styles.carrinho} ${styles.carrinhoPai}`}>
      <div
        className={`${styles.carrinho} ${styles.shadow} ${styles.carrinhoBody} ${styles.carrinhoElement}`}
      >
        <div
          className={`${styles.divCarrinhoDetalhes} ${styles.carrinhoElementTop}`}
        >
          <div
            className={`${styles.carrinhosElementsInsideTop} ${styles.topLeft}`}
          ></div>
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
                    <span>0</span>
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
        <div
          className={`${styles.divCarrinhoDentro} ${styles.closeHideCarrinho} ${styles.carrinhoElement}`}
        ></div>
      </div>
      <CarrinhoBodyFooter></CarrinhoBodyFooter>
    </div>
  );
};

export default CarrinhoBody;
