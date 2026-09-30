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

A conexão com o MongoDB é definida pela variável de ambiente `SPRING_MONGODB_URI` (nunca é versionada). Configure antes de rodar:

**Pelo terminal:**
```bash
export SPRING_MONGODB_URI="mongodb://localhost:27017/gerenciador_corridas"
# ou a connection string do Atlas, se preferir usar o banco compartilhado
cd apps/backend
./mvnw spring-boot:run
```

**Pelo IntelliJ:** Run → Edit Configurations → `FacisaApiApplication` → aba "Modify options" → "Environment variables" → adicione `SPRING_MONGODB_URI=<sua connection string>`.

Peça a connection string do Atlas pra equipe por um canal seguro (não cole em chat/print/commit).

A API sobe em `http://localhost:8080`.

### Frontend

```bash
cd apps/frontend
npm install
npm start
```

A aplicação sobe em `http://localhost:4200`.
