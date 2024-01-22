// 1. Considere o seguinte array:
const salarios = [
  5000.0, 5460.5, 3452.0, 6900.0, 7590.1, 8012.99, 1290.0, 15000.0,
];

// a. Imprima no console o índice do primeiro salário maior que
// 7.500 utilizando o findIndex

const maior7500 = (i) => i > 7500;
console.log(salarios.findIndex(maior7500));

// b. Crie uma nova lista filtrada com os salários que são maior que
// 8.000 utilizando o filter

const maior8000 = salarios.filter((salario) => salario > 8000);
console.log(maior8000);
