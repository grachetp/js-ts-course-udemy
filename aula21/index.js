/*
Operadores de comparação
= atribuição
== igualdade
=== igualdade estrita
!= diferente
!== diferente estrito
> maior que
>= maior ou igual a
< menor que
<= menor ou igual a

operadores lógicos
&& AND (E)
|| OR (OU)
! NOT (NÃO)

*/

const hora = 11;

if (hora >= 0 && hora <= 11) {
  console.log("Bom dia");
} else if (hora >= 12 && hora <= 17) {
  console.log("Boa tarde");
} else {
  console.log("Boa noite");
}
