import React from 'react';
import styles from './GruposNavegacao.module.css';
import { useSelector } from 'react-redux';

const GruposNavegacao = () => {
  const { data } = useSelector((state) => state.produtos);
  if (data)
    return (
      <div className={`${styles.shadow} ${styles.dayPasseio}`}>
        {data.grupos.map((grupo, index) => (
          <button
            key={grupo.id}
            id={grupo.id}
            className={
              index === 0
                ? `${styles.buttonDayPasseio} ${styles.colorGrupo}`
                : styles.buttonDayPasseio
            }
          >
            {grupo.nome}
          </button>
        ))}
      </div>
    );
  else return null;
};

export default GruposNavegacao;
