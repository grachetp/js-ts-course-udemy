// try {
//   console.log(naoexisto);
// } catch (error) {
//   console.log("Erro: ", error);
// }

function soma(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Os valores devem ser números");
  }
  return a + b;
}

try {
  soma("a", 2);
} catch (error) {
  console.log("Erro: ", error);
}
