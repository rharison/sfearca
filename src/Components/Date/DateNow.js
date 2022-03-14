function DateNow() {
  let date = new Date('2022/03/19');
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
