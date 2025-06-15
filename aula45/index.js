function retornaHora(data) {
  if (!(data instanceof Date)) {
    //console.log("data não é uma instância de Date");
    throw new Error("data não é uma instância de Date");
  }
  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

try {
  console.log(retornaHora(new Date()));
} catch (error) {
  console.log(error);
}
