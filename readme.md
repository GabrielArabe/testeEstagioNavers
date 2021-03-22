Pré-requisitos: 
Ter instalado:
	- Node
	- Git
	- Postman

Instalação:
Para preparar o ambiente, você deverá utilizar a sua IDE de preferência para baixar o repositório do GitHub.
Para testar os exercícios, clone o repositório (documentação da clonagem no GitHub: https://docs.github.com/pt/github/creating-cloning-and-archiving-repositories/cloning-a-repository).
(Link do repositório para clonagem: https://github.com/GabrielArabe/testeEstagioNavers.git).

Para testar os exercícios de lógica, E1 até o E10 abra o diretório com nome de "teste-estagio-template-forked", e em seguida abra o arquivo index.html. Para verificar os resultados, clique nos botões dos exercícios do 1 ao 10 e verifique se o resultado está de acordo com o esperado no console do seu browser.

Após testar os exercícios de lógica, para verificar o teste de front-end abra o diretório "desafioFrontEnd", e em seguida abra o arquivo index.html. Repare se a consulta na API foi feita da maneira como foi solicitada.


Para testar o teste de Backend o qual estou me candidatando para vaga de estágio, primeiro prepare o ambiente:
- Abra o diretório: testeNaveTeam\naversapi
- Dentro do diretório, instale os módulos do node: npm install
- para inicializar a aplicação utilize o comando: node app.js
- Abra o aplicativo do postman e faça o import da documentação que eu criei para o postman, está no diretório: testeNaveTeam\naversapi\postman.
- Para verificar todos os navers cadastrados utilize o Get do /Navers/Index.
- Para verificar um naver em específico utilize o Get do Navers/Show/ e utilize como referência o ID, para isso utilize o GUID válido que foi consultado no Get do /Navers/Index.
- Para adicionar um naver, utilize o post do Navers/Store e no body informe todos os campos solicitados.
- Para verificar todos os projects cadastrados utilize o Get do /Projetos/Index.
- Para verificar um project em específico utilize o Get do Projetos/Show/ e utilize como referência o ID, para isso utilize o GUID válido que foi consultado no Get do /Projetos/Index.
- Para adicionar um project, utilize o post do Projetos/Store e no body informe todos os campos solicitados.

Os exercícios de manipulação do banco de dados estão no diretório: \testeNaveTeam\naversapi\scripts
