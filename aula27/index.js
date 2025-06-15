const pontuacaoUsuario = 1000;

const nivelUsuario = pontuacaoUsuario >= 1000 ? "VIP" : "Normal";

const corUsuario = "Verde";
const corPadrao = corUsuario || "Preto";

console.log(nivelUsuario, corPadrao);
