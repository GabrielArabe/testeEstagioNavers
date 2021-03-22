/* E7
**Para o seguinte exercício** considere o array de objetos:
[
    {id: 1, first_name: ‘Juca’, last_name: ‘Da Silva’, age: 42},
    {id: 2, first_name: ‘Daniel’, last_name: ‘Gonçalves’,  age: 21},
    {id: 3, first_name: ‘Matheus’, last_name: ‘Garcia’, age: 28},
    {id: 4, first_name: ‘Gabriel’, last_name: ‘Dorneles’,  age: 21}
]

Encontre o primeiro objeto que possui uma pessoa com a idade menor que 25
e imprima seu nome. Caso não encontre, imprima que nenhum resultado foi encontrado.

 */

arrayDeObjetos = [
  { id: 1, first_name: "Juca", last_name: "Da Silva", age: 42 },
  { id: 2, first_name: "Daniel", last_name: "Gonçalves", age: 21 },
  { id: 3, first_name: "Matheus", last_name: "Garcia", age: 28 },
  { id: 4, first_name: "Gabriel", last_name: "Dorneles", age: 21 }
];

window.exercise07 = function () {
  for (let index = 0; index < arrayDeObjetos.length; index++) {
    if (arrayDeObjetos[index].age < 25) {
      return console.log("resultado ex7: " + arrayDeObjetos[index].first_name);
    }
  }
  console.log("resultado ex7: nenhum resultado foi encontrado");
};
