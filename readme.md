# API de Vendas

Projeto de estudo para desenvolvimento de uma **API RESTful utilizando Node.js e TypeScript**.

O projeto será desenvolvido durante o curso **API RESTful JavaScript com Node.js, TypeScript, TypeORM etc**, com o objetivo de praticar desenvolvimento backend, criação de rotas, banco de dados, autenticação, tratamento de erros e organização de uma API.

---

## 🚀 Tecnologias utilizadas

Inicialmente o projeto utiliza:

- Node.js
- TypeScript
- Express
- TypeORM
- PostgreSQL
- Git
- npm

Outras tecnologias serão adicionadas conforme o desenvolvimento do projeto.

---

## 📦 Código inicial do curso

O projeto utiliza como ponto de partida o código disponibilizado pelo instrutor:

```text
https://github.com/conexnetworks/apivendas2024-course-start-code
```

Para clonar o projeto:

```bash
git clone https://github.com/conexnetworks/apivendas2024-course-start-code.git
```

Depois, acessar a pasta:

```bash
cd apivendas2024-course-start-code
```

---

## 📥 Instalando as dependências

Após clonar o projeto:

```bash
npm install
```

Esse comando instala as dependências definidas no arquivo `package.json`.

---

## 📚 Dependências iniciais

O código inicial já possui algumas dependências configuradas:

```text
dotenv
express
express-async-errors
pg
reflect-metadata
typeorm
```

### Express

Utilizado para criação do servidor HTTP, rotas e endpoints da API.

### dotenv

Utilizado para leitura de variáveis de ambiente através de arquivos como:

```text
.env
```

### pg

Driver utilizado para comunicação entre a aplicação Node.js e o banco de dados PostgreSQL.

### TypeORM

ORM utilizado para trabalhar com banco de dados através de entidades, repositórios e relacionamentos utilizando TypeScript.

### reflect-metadata

Biblioteca utilizada em conjunto com recursos de decorators e pelo TypeORM.

### express-async-errors

Auxilia no tratamento de erros provenientes de funções assíncronas utilizadas com Express.

---

## 🗂️ Estrutura inicial

Neste momento, o projeto possui uma estrutura básica:

```text
src/
└── server.ts

.editorconfig
.gitignore
.prettierignore
.prettierrc
eslint.config.mjs
package.json
package-lock.json
tsconfig.json
```

A estrutura será ampliada conforme novas partes da API forem desenvolvidas.

---

## ▶️ Executando o projeto

O projeto possui um script de desenvolvimento configurado no `package.json`.

Quando as dependências estiverem instaladas:

```bash
npm run dev
```

---

## 🎯 Objetivo do projeto

Durante o desenvolvimento serão estudados e implementados conceitos como:

```text
API REST
→ rotas e endpoints
→ controllers
→ services / casos de uso
→ entidades
→ repositories
→ TypeORM
→ PostgreSQL
→ relacionamentos
→ tratamento de erros
→ autenticação JWT
→ upload de arquivos
→ cache
→ envio de e-mails
```

Este README será atualizado conforme novas funcionalidades e tecnologias forem adicionadas ao projeto.

mais tacnologias inataladas

npm instal cors
npm instal -D @types/cors
npm install zod
