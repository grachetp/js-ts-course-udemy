const elementos = [
  { tag: "p", texto: "Qualquer 1 texto que você quiser" },
  { tag: "div", texto: "Qualquer 2 texto que você quiser" },
  { tag: "footer", texto: "Qualquer 3 texto que você quiser" },
  { tag: "section", texto: "Qualquer 4 texto que você quiser" },
];

const container = document.querySelector(".container");
const div = document.createElement("div");

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag);
  tagCriada.innerText = texto;
  div.appendChild(tagCriada);
}
container.appendChild(div);
