function mostraHora() {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}

// function funcaoDoInterval() {
//   console.log(mostraHora());
// }

// setInterval(funcaoDoInterval, 1000);

// setInterval(() => {
//   console.log(mostraHora());
// }, 1000);
//
// console.log("Hello World");

const timer = setInterval(() => {
  console.log(mostraHora());
}, 1000);

setTimeout(() => {
  clearInterval(timer);
  console.log("Intervalo finalizado");
}, 5000);

setTimeout(() => {
  console.log("Hello World");
}, 10000);
