import React from 'react';
import styles from './CarrinhoBodyFooter.module.css';
import { useSelector } from 'react-redux';

const CarrinhoBodyFooter = () => {
  const listItens = useSelector((state) => state.carrinho.listItens);
  const [currentWidthWindowClient, setCurrentWidthWindowClient] =
    React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener('resize', () =>
      setCurrentWidthWindowClient(window.innerWidth),
    );
  }, []);

  return (
    <div
      className={`${styles.carrinho} ${styles.carrinhoBodyFooter} ${styles.carrinhoElement}`}
    >
      <button
        className={`${styles.buttonCarrinhoFooter} ${styles.buttonCarrinhoFooterLeft}`}
      >
        <span>
          {currentWidthWindowClient < 546
            ? 'Outro dia'
            : 'Comprar para outro dia'}
        </span>
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
        name="finalizarVenda"
        className={
          !Object.values(listItens).length
            ? styles.buttonCarrinhoFooter
            : `${styles.buttonCarrinhoFooter} ${styles.buttonCarrinhoFooterAtivado}`
        }
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
  );
};

export default CarrinhoBodyFooter;
