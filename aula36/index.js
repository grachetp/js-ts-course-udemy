const frutas = ["banana", "maçã", "uva", "laranja", "pêra"];

//for
for (let i = 0; i < frutas.length; i++) {
  console.log(`Índice ${i}`, frutas[i]);
}

//for in
for (let fruta in frutas) {
  console.log(frutas[fruta]);
}

const nome = "Pedro Grachet";

//pega a posição do valor
for (let valor in nome) {
  console.log(valor);
}

//pega o valor
for (let valor of nome) {
  console.log(valor);
}

//for each
const nomes = ["Pedro", "João", "Maria", "Ana", "Bruno"];

nomes.forEach(function (elemento, indice) {
  console.log(elemento, indice);
});

//While
let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

//do while
do {
  console.log(i);
  i++;
} while (i < 10);
