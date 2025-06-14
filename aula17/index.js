function saudacao(nome) {
  return `Olá ${nome}`;
}

const variavel = saudacao("Pedro");
console.log(variavel);

// saudacao("Pedro");
// saudacao("João");
// saudacao("Maria");

const raiz = function (n) {
  return n ** 0.5;
};

const raizArrowFunction = (n) => {
  return n ** 0.5;
};

const raizArrowFunctionSimply = (n) => n ** 0.5;

console.log(raiz(9));
console.log(raizArrowFunction(9));
