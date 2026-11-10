# 🏗️ BIM Clash Detection API (ConTech)

> Uma API desenvolvida em Node.js e Express para detecção automatizada de conflitos espaciais (Clash Detection) entre disciplinas de engenharia e arquitetura.

## 🎯 O Problema

Na construção civil e na arquitetura, um erro de projeto que passa despercebido não custa apenas dinheiro — ele compromete a credibilidade do profissional, exige retrabalhos caríssimos em canteiro de obras e pode causar problemas estruturais sérios a longo prazo.

Ferramentas tradicionais de BIM (Building Information Modeling) costumam ser pesadas e complexas. Este projeto nasceu de uma dor real: criar um micro-serviço leve, rápido e inteligente para validar coordenadas e cruzar disciplinas (como Estrutura vs. HVAC/Elétrica) logo na fase de concepção.

---

## 🚀 Como o projeto nasceu (A Curva de Aprendizado)

O mais curioso sobre este projeto é que **ele não foi planejado**.
Três dias atrás, comecei a estudar algoritmos e resolução de problemas. Esse processo mudou a minha chave mental de loops e `if/else` simples para a **Programação Orientada a Objetos (POO)**. Daí para a criação de rotas básicas, migração para o Express e estruturação de uma API em camadas foi um pulo guiado puramente por curiosidade e proatividade. Sendo estudante no início da faculdade de Sistemas de Informação, decidi unir minha bagagem prévia com construção civil à tecnologia.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js & Express:** Construção do servidor HTTP e arquitetura de rotas.
- **SQLite (`better-sqlite3`):** Persistência de dados leve e segura baseada em arquivos locais.
- **Programação Orientada a Objetos (POO):** Organização do código em models, controllers e validações de domínio.
- **Arquitetura em Camadas:** Separação clara de responsabilidades (Clean Code).

---

## ⚙️ Funcionalidades (Endpoints)

- `POST /api/elementos` — Cadastra um novo elemento construtivo com validação rigorosa de coordenadas e disciplina.
- `GET /api/elementos` — Lista todos os elementos salvos no projeto.
- `GET /api/clashes` — Executa o algoritmo de detecção de conflitos entre diferentes disciplinas na mesma coordenada espacial (`x, y, z`).
- `DELETE /api/elementos/:id` — Remove um elemento do banco de dados pelo ID.

---

## 🏃‍♂️ Como Rodar o Projeto na sua Máquina

1. Clone o repositório:
   `git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git`

2. Instale as dependências:
   `npm install`

3. Inicie o servidor em modo de desenvolvimento:
   `node --watch src/server.js`

4. Utilize uma ferramenta como **Thunder Client** ou **Postman** na porta `3000` para testar as rotas.
