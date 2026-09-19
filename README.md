# Lorebox

Projeto acadêmico do curso de Análise e Desenvolvimento de Sistemas (ADS) da Unifacisa, desenvolvido para as competências:

- Integrar Interfaces Web e Serviços Web
- Criar Banco de Dados Não Relacionais

Sistema de gerenciamento de inscrições em corridas, com cadastro de corredores, corridas e inscrições vinculando os dois.

## Equipe

- Ana Cristina Batista Japiassu
- Enzo Barros Pietoso Camara
- Felipe Monteiro Gomes
- Maurickson Xavier Braga
- Thales de Oliveira Silva

## Stack

- **Backend:** Java 21 + Spring Boot, MongoDB
- **Frontend:** Angular

## Estrutura

```
apps/
├── backend/   # API REST (Spring Boot + MongoDB)
└── frontend/  # Aplicação Angular
```

## Como rodar

### Backend

```bash
cd apps/backend
./mvnw spring-boot:run
```

A API sobe em `http://localhost:8080`. É necessário ter o MongoDB rodando localmente (`mongodb://localhost:27017`).

### Frontend

```bash
cd apps/frontend
npm install
npm start
```

A aplicação sobe em `http://localhost:4200`.
