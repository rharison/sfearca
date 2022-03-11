import React from 'react';
import styles from './GruposNavegacao.module.css';
import { useSelector } from 'react-redux';
import { onlyAllGroups } from '../../store/produtos';

const GruposNavegacao = ({ alternateTab }) => {
  const grupos = useSelector(onlyAllGroups);
  const firstGroup = grupos[0];
  const [active, setActive] = React.useState(firstGroup.id);

  function handleClick(event) {
    const idGroup = event.target.id;
    setActive(idGroup);
    alternateTab(idGroup);
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
          onClick={handleClick}
        >
          {grupo.nome}
        </button>
      ))}
    </div>
  );
};

export default GruposNavegacao;
