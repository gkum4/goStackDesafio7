const formatValue = (value: number): string =>
  `R$ ${Intl.NumberFormat('pt-BR').format(value)},00`;

export default formatValue;
