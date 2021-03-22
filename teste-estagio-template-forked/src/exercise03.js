/* E3
  Dado o objeto `{4: ‘a’, 3: ‘e’, 1: ‘i’, 5: ‘s’}`,
  substitua os números na frase `‘T35t3 d3 35t4g1o’` conforme a sua respectiva letra
*/

var frase = "T35t3 d3 35t4g1o";

for (let i = 0; i < frase.length; i++) {
  if (frase[i] == "3") frase = frase.replace(3, "e");
  if (frase[i] == "5") frase = frase.replace(5, "s");
  if (frase[i] == "4") frase = frase.replace(4, "a");
  if (frase[i] == "1") frase = frase.replace(1, "i");
}

window.exercise03 = function () {
  console.log("resultado ex3: " + frase);
};
