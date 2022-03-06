import React from 'react';

function DateNow() {
  let date = new Date(); //por algum motivo está tirando -1 do dia criar assim
  let dia = date.getDate();
  let monthNumber = date.getMonth() + 1;
  let ano = date.getFullYear();
  const dateNow = `${ano}-${monthNumber < 10 ? '0' : ''}${monthNumber}-${
    dia < 10 ? '0' : ''
  }${dia}`;
  let monthString = date.toLocaleString('default', { month: 'long' });
  return { dia, monthNumber, ano, dateNow, monthString };
}

export default DateNow;
