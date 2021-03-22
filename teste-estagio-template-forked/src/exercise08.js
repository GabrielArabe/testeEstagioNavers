/* E8
**Para o seguinte exercício** considere o array de objetos:
[
    {id: 1, first_name: ‘Juca’, last_name: ‘Da Silva’, age: 42},
    {id: 2, first_name: ‘Daniel’, last_name: ‘Gonçalves’,  age: 21},
    {id: 3, first_name: ‘Matheus’, last_name: ‘Garcia’, age: 28},
    {id: 4, first_name: ‘Gabriel’, last_name: ‘Dorneles’,  age: 21}
]

Imprima todos os elementos em que a idade é menor que 30.

 */

pessoasComIdadeMenorDe30 = [];

arrayDeObjetos = [
  { id: 1, first_name: "Juca", last_name: "Da Silva", age: 42 },
  { id: 2, first_name: "Daniel", last_name: "Gonçalves", age: 21 },
  { id: 3, first_name: "Matheus", last_name: "Garcia", age: 28 },
  { id: 4, first_name: "Gabriel", last_name: "Dorneles", age: 21 }
];

window.exercise08 = function () {
  for (let index = 0; index < arrayDeObjetos.length; index++) {
    if (arrayDeObjetos[index].age < 30) {
      pessoasComIdadeMenorDe30.push(arrayDeObjetos[index].first_name);
    }
  }
  console.log("resultado ex8: " + pessoasComIdadeMenorDe30);
};
