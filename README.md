# Blogs API

<details> 
<summary>:brazil: Versão em Português</summary>

## Objetivo

Construir uma API de Blogs para gerenciar a criação e autenticação de usuários, criação e edição de postagens, bem como o gerenciamento de suas categorias.

As ferramentas obrigatórias para criar e gerenciar o banco de dados foram os pacotes Node.js sequelize e sequelize-cli.

## Observações

Essa API foi desenvolvida utilizando o banco de dados MySQL e pacotes Node.js como express, express-rescue, mysql2, sequelize e sequelize-cli. <br />
A arquitetura de software foi construida usando o padrão Model-Service-Control.

- Todos os arquivos fora do diretório /src, com exceção do REAMDE.md, foram criados e configurados pela Trybe.

## Executando a aplicação localmente

- Para instalar os containers docker:

```
docker-compose up -d
```

- Executar o terminal do container:

```
docker attach blogs_api
```

- Instalar as dependências, criar e popular o banco de dados:

```
npm install && npm run prestart && npm run seed
```

- Inicializar a aplicação:

```
npm start
```

<br />

## Endpoints

### Login

| Requisição | URL                         |
| ---------- | --------------------------- |
| `POST`     | http://localhost:3000/login |

### User

| Requisição | URL                            |
| ---------- | ------------------------------ |
| `GET`      | http://localhost:3000/user     |
| `GET`      | http://localhost:3000/user/:id |
| `POST`     | http://localhost:3000/user     |
| `DELETE`   | http://localhost:3000/user/:id |

### BlogPost

| Requisição | URL                                      |
| ---------- | ---------------------------------------- |
| `GET`      | http://localhost:3000/post               |
| `GET`      | http://localhost:3000/post/:id           |
| `GET`      | http://localhost:3000/post/search?q=name |
| `PUT`      | http://localhost:3000/post/:id           |
| `POST`     | http://localhost:3000/post               |
| `DELETE`   | http://localhost:3000/post/:id           |

### User

| Requisição | URL                              |
| ---------- | -------------------------------- |
| `GET`      | http://localhost:3000/categories |
| `POST`     | http://localhost:3000/categories |

<br />

</details>

<details open> 
<summary>:us: English Version</summary>

## Objective

To build a Blogs API that manages the creation and authentication of users, creation and editing of posts, as well as managing their categories.

The mandatory tools for creating and managing the database were the Node.js packages sequelize and sequelize-cli.

## Observations

It was developed using MySQL database and Node.js packages such as express, express-rescue, mysql2, sequelize and sequelize-cli <br />
The software architecture was built following the Model-Service-Control standard.

- All files outside of /src directory, with the exception of README.md, were created and configured by Trybe.

## Running the application locally

- To install the docker containers:

```
docker-compose up -d
```

- Run the container terminal:

```
docker attach blogs_api
```

- Install dependencies, create and populate the database:

```
npm install && npm run prestart && npm run seed
```

- Start the application:

```
npm start
```

<br />

## Endpoints

### Login

| Request | URL                         |
| ------- | --------------------------- |
| `POST`  | http://localhost:3000/login |

### User

| Request  | URL                            |
| -------- | ------------------------------ |
| `GET`    | http://localhost:3000/user     |
| `GET`    | http://localhost:3000/user/:id |
| `POST`   | http://localhost:3000/user     |
| `DELETE` | http://localhost:3000/user/:id |

### BlogPost

| Request  | URL                                      |
| -------- | ---------------------------------------- |
| `GET`    | http://localhost:3000/post               |
| `GET`    | http://localhost:3000/post/:id           |
| `GET`    | http://localhost:3000/post/search?q=name |
| `PUT`    | http://localhost:3000/post/:id           |
| `POST`   | http://localhost:3000/post               |
| `DELETE` | http://localhost:3000/post/:id           |

### Categories

| Request | URL                              |
| ------- | -------------------------------- |
| `GET`   | http://localhost:3000/categories |
| `POST`  | http://localhost:3000/categories |

</details>
