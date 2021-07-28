# Package
```
yarn add @types/node cors cross-env dotenv express moment mysql2 sequelize ts-custom-error argon2 sqlite3
```
```
yarn add -D @types/cors @types/express @types/jest @types/mocha @types/moment @types/sequelize jest mocha nodemon ts-jest ts-node-dev typescript
```

# .gitignore
```
# Dependency directories
node_modules/
dist/

# dotenv environment variable files
.env*

```

# tsconfig.json
```
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist"
  },
  "lib": ["es2015"]
}
```

# ESLint

  https://infsoft.home.blog/2021/07/26/eslint-prettier-vscode/


# DB

```
   yarn add --save pg pg-hstore # Postgres
   yarn add --save mysql2
   yarn add --save mariadb
   yarn add --save sqlite3
   yarn add --save tedious # Microsoft SQL Server
```

## Connecting to a database

```
  const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite'
});

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});
```

## Testing the connection
```
  try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
```

## Closing the connection
```
  sequelize.close()
```