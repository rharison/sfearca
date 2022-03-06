import React from 'react';
import UseFetch from '../../Hooks/UseFetch';
import DateNow from '../Date/DateNow';
import styles from './GruposNavegacao.module.css';
import Error from '../Error';

const GruposNavegacao = () => {
  const { dateNow } = DateNow();
  const urlRequest = `https://sofalta.eu/api/v4/empreendimentos/arcaparque/produtos/ingressos/ingressos?data=${dateNow}`;
  const { data, error, request } = UseFetch();

  React.useEffect(() => {
    async function fetchGroups() {
      await request(urlRequest);
    }
    fetchGroups();
  }, [request, urlRequest]);
  if (error) return <Error error={error} />;
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
