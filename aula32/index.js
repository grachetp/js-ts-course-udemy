// let varA = "A";
// let varB = "B";
// let varC = "C";

// const numeros = [1, 2, 3];

// console.log(varA, varB, varC);

// [varA, varB, varC] = numeros;

// console.log(varA, varB, varC);

const numeros = [1, 2, 3, 4, 5, 6];

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// const [primeiro, ...resto] = numeros;

// const [um, , tres, , , seis] = numeros;
// console.log(um, tres, seis);

console.log(matriz[1][1]);

const pessoa = {
  nome: "Pedro",
  sobrenome: "Henrique",
  idade: 20,
  endereco: {
    rua: "Rua dos Bobos",
    numero: 0,
  },
};

// const { nome: teste = "", sobrenome, idade } = pessoa;

// console.log(teste, sobrenome, idade);

const { nome, ...resto } = pessoa;
console.log(nome, resto);
