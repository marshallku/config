const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: ["@rushstack/eslint-config/profile/web-app"].map(require.resolve),
    parserOptions: {
        project,
    },
    plugins: [],
    rules: {
        "@rushstack/typedef-var": "off",
        "@rushstack/no-new-null": "off",
        eqeqeq: [
            "error",
            "always",
            {
                null: "ignore",
            },
        ],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/naming-convention": [
            "warn",
            {
                selector: "variable",
                format: ["camelCase", "PascalCase", "UPPER_CASE"],
            },
            {
                selector: "function",
                format: ["camelCase", "PascalCase"],
            },
            {
                selector: "typeLike",
                format: ["PascalCase"],
            },
            {
                selector: "interface",
                format: ["PascalCase"],
                custom: {
                    regex: "^I[A-Z]",
                    match: false,
                },
            },
            {
                selector: "typeAlias",
                format: ["PascalCase"],
                custom: {
                    regex: "^T[A-Z]",
                    match: false,
                },
            },
            {
                selector: "typeParameter",
                format: ["PascalCase"],
                custom: {
                    regex: "^T[A-Z]",
                    match: false,
                },
            },
        ],
        "@typescript-eslint/explicit-function-return-type": "warn",
    },
    settings: {
        "import/resolver": {
            typescript: {
                project,
            },
        },
    },
};
