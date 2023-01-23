# Desafio

Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Suba tudo em um repositório e faça a entrega.

* A linguagem de programação para este desafio é Node/JavaScript.

# Tarefas

- [X] Habilitar comunicacao entre nginx e node
- [X] Habilitar comunicacao entre mysql e node
- [X] Adicionar rota para listar as pessoas cadastradas no banco
- [X] Adicionar rota para cadastrar pessoas dinamicamente no banco
- [X] Subir o container do node somente apos o mysql estar on

# Instrucoes
Apos realizado o clone do repositorio, rode o seguinte comando:

`$ cp db/db.env.example db/db.env`

Depois disso, basta preencher as variaveis presentes no arquivo **db.env** com algum valor e rodar o comando: 

`$ docker compose up -d`
