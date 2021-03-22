/* E1
  Crie uma função que recebe duas strings
  e retorna a de maior comprimento.
*/

function maiorNumeroDeChar(string1, string2) {
  if (string1.length > string2.length) {
    return string1;
  }
  if (string1.length < string2.length) {
    return string2;
  }
  return "Ambas strings têm a mesma quantidade de caracteres";
}

window.exercise01 = function () {
  let resultado = maiorNumeroDeChar("Abc", "Abcd");
  console.log("resultado ex1: " + resultado);
};
