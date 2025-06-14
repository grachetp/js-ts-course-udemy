function meuEscopo() {
  const pessoas = [];
  const resultado = document.querySelector(".resultado");
  const form = document.querySelector(".form");

  form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const inputNome = form.querySelector(".nome");
    const inputSobrenome = form.querySelector(".sobrenome");
    const inputPeso = form.querySelector(".peso");
    const inputAltura = form.querySelector(".altura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    const nome = inputNome.value;
    const sobrenome = inputSobrenome.value;

    pessoas.push({
      nome,
      sobrenome,
      peso,
      altura,
    });
    console.log(pessoas);

    resultado.innerHTML = `<p>Nome: ${nome}</p>
    <p>Sobrenome: ${sobrenome}</p>
    <p>Peso: ${peso}</p>
    <p>Altura: ${altura}</p>`;
  });
}
meuEscopo();
