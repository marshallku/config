const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: [
        "prettier",
        "eslint:recommended",
        "plugin:@tanstack/eslint-plugin-query/recommended",
        ...["@vercel/style-guide/eslint/typescript", "@vercel/style-guide/eslint/next"].map(require.resolve),
        "eslint-config-turbo",
    ],
    parserOptions: {
        project,
    },
    globals: {
        React: true,
        JSX: true,
    },
    env: {
        node: true,
        browser: true,
    },
    settings: {
        "import/resolver": {
            typescript: {
                project,
            },
        },
    },
    ignorePatterns: [".*.c?js", "node_modules/", ".next/"],
    overrides: [
        {
            files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
            extends: ["plugin:testing-library/react"],
            rules: {
                "react-refresh/only-export-components": "off",
            },
        },
        { files: ["*.js?(x)", "*.ts?(x)"] },
    ],
    rules: {
        "@next/next/no-img-element": "off",
        "jsx-a11y/alt-text": [
            "warn",
            {
                elements: ["img"],
            },
        ],
        "jsx-a11y/aria-props": "warn",
        "jsx-a11y/aria-proptypes": "warn",
        "jsx-a11y/aria-unsupported-elements": "warn",
        "jsx-a11y/role-has-required-aria-props": "warn",
        "jsx-a11y/role-supports-aria-props": "warn",
        "react/no-unknown-property": "off",
        "react/prop-types": "off",
        "no-unused-vars": "off",
    },
};
