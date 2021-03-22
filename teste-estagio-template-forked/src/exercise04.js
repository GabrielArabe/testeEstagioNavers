/* E4
 Utilizando a api da viacep (https://viacep.com.br/) e o seu cep como entrada,
 imprima o seu endereço no formato `‘ENDERECO, NUMERO, CIDADE/ESTADO’`.
 Utilize a fetch API (https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API) para realizar a requisição.
*/

function consultarCep(cep) {
  let url = "https://viacep.com.br/ws/" + cep + "/json/";
  let resultado;
  return fetch(url)
    .then((r) => {
      return r.json();
    })
    .then((data) => {
      resultado = data.logradouro + ", " + data.localidade + "/" + data.uf;
      return resultado;
    });
}

window.exercise04 = function () {
  consultarCep("04112070").then((resultado) =>
    console.log("resultado ex4: " + resultado)
  );
};
