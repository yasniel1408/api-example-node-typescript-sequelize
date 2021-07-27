# Package
```
yarn add @types/node cors cross-env dotenv express moment mysql2 sequelize ts-custom-error
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

