<h3 align="center"> 
    API NodeJS + Express + PostGree
<h3>
<br>

## Overview

Realizar uma API REST com sequelize

- **[nodejs](https://nodejs.org/)**
- **[PostgreSQL](https://www.postgresql.org/)**
- **[Sequelize](https://sequelize.org/)**

## Comandos utilizados

```bash
npm init -y
npm install express pg pg-hstore sequelize 
npm install --save-dev nodemon dotenv sequelize-cli
npx sequelize-cli db:create
npx sequelize-cli migration:generate --name=create-users
npx sequelize-cli db:migrate
npx sequelize-cli migration:generate --name=create-addresses
```



