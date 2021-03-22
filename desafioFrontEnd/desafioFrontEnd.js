
let divResultado = document.getElementById("resultado");


function listaDeNavers() {
    let url = "https://my-json-server.typicode.com/naveteam/fake-api/navers";  
    return fetch(url).then((r) => {
    return r.json();
    })
    .then((data) => {    
    return data;
    });
  }



onload = function desafioFrontEnd () {    
    listaDeNavers().then((resultado) =>{
    console.log(JSON.stringify(resultado));
    resultado.forEach(naver => {
        let html = `<img src="${naver.image_url}" alt="" width="200" height="auto"><h2>${naver.name}</h2><h4>${naver.job_role}</h4>`;
        const div = document.createElement('div');             
        div.innerHTML = html;     
        divResultado.appendChild(div);
        divResultado.className = "grid-container"; 
    });
    });  

};
