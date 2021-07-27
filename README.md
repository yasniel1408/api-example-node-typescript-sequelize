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

```
yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```
## .eslintrc
```
{
 "parser": "@typescript-eslint/parser",
 "extends": [
   "plugin:@typescript-eslint/recommended",
   "prettier/@typescript-eslint",  // agrega las reglas de prettier a eslint
   "plugin:prettier/recommended" // agregar el plugin que integra eslint con prettier
 ],
 "parserOptions": {
   "ecmaVersion": 2018,
   "sourceType": "module"
 },
 "rules": {
   // Aca puedes modificar alguna regla específica, por ejemplo:
   // "@typescript-eslint/explicit-function-return-type": "off",
 }
}
```

# Prettier
```
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
```

## .prettierrc
```
  {
    "semi": false, // punto y coma al final de cada declaración
    "tabWidth": 2, // tamaño de los tabs
    "printWidth": 100, // largo máximo de una línea de código
    "singleQuote": true,  // comillas simples
    "trailingComma": "none" // comas en objetos o arrays multi líneas
  }
```

# add Script
```
  {
 "scripts": {
  ...
   "lint": "tsc --noEmit && eslint '*/**/*.{js,ts}' --quiet --fix"
  ...
 }
}
```