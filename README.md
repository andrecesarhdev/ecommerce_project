# 🏪 Sistema de Controle de Estoque — FreeSurf Store  
Um sistema desenvolvido em **TypeScript**, utilizando princípios de **POO** e arquitetura em camadas, para simular o gerenciamento de produtos de uma loja.  
O usuário pode cadastrar, listar, atualizar, buscar e deletar produtos diretamente pelo terminal.

---

## 🚀 Funcionalidades

- 📌 Cadastrar Produto  
- 📋 Listar Produtos  
- 🔎 Buscar Produto por ID  
- 🔄 Atualizar Produto  
- ❌ Deletar Produto  
- 🧱 Arquitetura organizada em Model, Repository e Controller  

---

## 🧠 Objetivo do Projeto

Este projeto foi desenvolvido com foco em aprendizado, visando praticar:

- Programação Orientada a Objetos  
- Herança e classes abstratas  
- Uso de interfaces  
- Entrada e saída de dados no terminal  
- Organização de código em camadas  

---

## 📂 Estrutura do Projeto
📦 ecommerce_project
┣ 📂 src
┃ ┣ 📂 controller
┃ ┃ ┗ 📄 ProdutoController.ts
┃ ┣ 📂 model
┃ ┃ ┣ 📄 Produto.ts
┃ ┃ ┗ 📄 ProdutoGeral.ts
┃ ┣ 📂 repository
┃ ┃ ┣ 📄 InterfaceProdutoRepository.ts
┃ ┃ ┗ 📄 ProdutoRepository.ts
┃ ┗ 📄 Menu.ts
┣ 📄 tsconfig.json
┣ 📄 package.json
┣ 📄 README.md

---
📚 Tecnologias Utilizadas:
TypeScript;
Node.js;
readline-sync;
POO;
Arquitetura em camadas;

🧠 Objetivos do Projeto
Praticar organização de projetos TypeScript;
Criar uma aplicação modular e escalável;
Aplicar herança, classes abstratas, interfaces e encapsulamento;
Manipular entradas e saídas no terminal;
Trabalhar com lógica de CRUD sem banco de dados;

🧩 Arquitetura do Sistema:

Model:
Contém os modelos (classes) que representam os objetos do sistema.

Repository:
Implementa o CRUD em memória, simulando um banco de dados.

Controller:
Recebe comandos do menu e coordena as ações do sistema.

Menu:
Arquivo que exibe o menu e chama a Controller.


📸 Exemplo do Menu:
1 - Cadastrar Produto
2 - Listar Produtos
3 - Buscar Produto por ID
4 - Atualizar Produto
5 - Apagar Produto
6 - Sair

🛠️ Melhorias Futuras:
Persistência em arquivo JSON;
Conexão com banco de dados;
Criar API REST (Express ou NestJS);
Interface gráfica;
Validações mais fortes no input de usuário;

👨‍💻 Desenvolvedor:
André César Henrique
GitHub: https://github.com/andrecesarhdev
