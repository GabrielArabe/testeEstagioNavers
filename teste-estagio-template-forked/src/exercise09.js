/* E9
**Para o seguinte exercício** considere o array de objetos:
[
    {id: 1, first_name: ‘Juca’, last_name: ‘Da Silva’, age: 42},
    {id: 2, first_name: ‘Daniel’, last_name: ‘Gonçalves’,  age: 21},
    {id: 3, first_name: ‘Matheus’, last_name: ‘Garcia’, age: 28},
    {id: 4, first_name: ‘Gabriel’, last_name: ‘Dorneles’,  age: 21}
]

Ordene o array de forma decrescente por idade,
em caso de empate o desempate é pelo id(em ordem crescente)

*/

arrayDeObjetos = [
  { id: 1, first_name: "Juca", last_name: "Da Silva", age: 42 },
  { id: 2, first_name: "Daniel", last_name: "Gonçalves", age: 21 },
  { id: 3, first_name: "Matheus", last_name: "Garcia", age: 28 },
  { id: 4, first_name: "Gabriel", last_name: "Dorneles", age: 21 }
];

arrayDeObjetos.sort((a, b) => {
  if (a.age > b.age) {
    return -1;
  } else if (a.age < b.age) {
    return 1;
  } else {
    if (a.id > b.id) {
      return 1;
    } else return -1;
  }
});

window.exercise09 = function () {
  for (let index = 0; index < arrayDeObjetos.length; index++) {
    console.log(
      "resultado ex9: ordem das idades: " +
        arrayDeObjetos[index].age +
        " ordem dos IDs: " +
        arrayDeObjetos[index].id
    );
  }
};
