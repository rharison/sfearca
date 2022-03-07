import React from 'react';

const Error = ({ error }) => {
  if (!error) return null;
  return (
    <p
      style={{
        color: '#f31',
        margin: '1rem 0',
        width: '100%',
        textAlign: 'center',
        padding: '5rem',
      }}
    >
      Erro: {error}
    </p>
  );
};

export default Error;
