# Monorepo for ESLint, Prettier, and TypeScript Configurations

This repository contains shared configuration files for ESLint, Prettier, and TypeScript, designed to be used across multiple projects. The configurations are published on npm for easy integration.

## Folder Structure

- `.github`: GitHub configuration files
- `__tests__`: Contains scripts to validate ESLint configurations.
- `apps`: Example applications to demonstrate the use of the configurations.
  - `next`: Example Next.js application.
  - `react`: Example React application.
- `packages`: Contains the shared configuration packages.
  - `eslint`: ESLint configuration files ([`@marshallku/eslint-config`](https://www.npmjs.com/package/@marshallku/eslint-config)).
  - `prettier`: Prettier configuration files ([`@marshallku/prettier-config`](https://www.npmjs.com/package/@marshallku/prettier-config)).
  - `typescript`: TypeScript configuration files ([`@marshallku/typescript-config`](https://www.npmjs.com/package/@marshallku/typescript-config)).

## Installation

You can install each configuration package via npm.

### ESLint Configuration

Install the ESLint configuration:

```bash
npm i -D @marshallku/eslint-config
```

Then, create or update your `.eslintrc.cjs` file to extend the installed configuration:

```js
require("@marshallku/eslint-config/patch");

/** @type {import("eslint").Linter.Config} */
module.exports = {
    env: { browser: true, es2020: true },
    extends: ["@marshallku/eslint-config", "@marshallku/eslint-config/mixins/react"],
    settings: {
        react: {
            version: "18.2",
        },
    },
    parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
    },
};
```

You have to import `@marshallku/eslint-config/patch` module before extending the configuration.

Also, please make sure to add version of React to the `settings.react.version` field, and set the `parserOptions.project` and `parserOptions.tsconfigRootDir` fields to enable TypeScript support.

### Prettier Configuration

Install the Prettier configuration:

```bash
npm i -D @marshallku/prettier-config
```

Then, add `prettier` field to your `package.json` file:

```json
{
    "name": "my-package",
    "version": "1.0.0",
    "prettier": "@marshallku/prettier-config"
}
```

### TypeScript Configuration

Install the TypeScript configuration:

```bash
npm i -D @marshallku/typescript-config
```

Then, create or update your `tsconfig.json` file to extend the installed configuration:

```json
{
    "extends": "@marshallku/typescript-config/react-library.json",
    "compilerOptions": {
        "target": "ES2020"
    },
    "include": ["src"]
}
```
