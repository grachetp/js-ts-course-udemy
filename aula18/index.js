const pessoa1 = {
  nome: "Pedro",
  sobrenome: "Gomes",
  idade: 20,
  fala() {
    console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} anos`);
  },
  incrementaIdade() {
    this.idade++;
  },
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
