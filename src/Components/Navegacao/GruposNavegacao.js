import React from 'react';
import styles from './GruposNavegacao.module.css';
import { useSelector } from 'react-redux';
import { onlyAllGroups } from '../../store/produtos';

const GruposNavegacao = ({ alternateTab }) => {
  const grupos = useSelector(onlyAllGroups);
  const [active, setActive] = React.useState(grupos[0].id);

  function haldeClick(event) {
    setActive(event.target.id);
    alternateTab(event.target.id);
  }

  return (
    <div className={`${styles.shadow} ${styles.dayPasseio}`}>
      {grupos?.map((grupo, index) => (
        <button
          key={grupo.id}
          id={grupo.id}
          className={`${styles.buttonDayPasseio} ${
            active === grupo.id ? styles.colorGrupo : ''
          }`}
          onClick={haldeClick}
        >
          {grupo.nome}
        </button>
      ))}
    </div>
  );
};

export default GruposNavegacao;
