/* E2
  Dado a seguinte string `‘teste 1 de 2 string 3’`,
  substitua todas as ocorrências de números por `$`.
*/

let stringDoTeste = "teste 1 de 2 string 3";

var newString1 = stringDoTeste.replace(1, "$");
var newString2 = newString1.replace(2, "$");
var newString3 = newString2.replace(3, "$");

window.exercise02 = function () {
  console.log("resultado ex2: " + newString3);
};
