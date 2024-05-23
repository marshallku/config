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
        "@typescript-eslint/explicit-function-return-type": "off",
    },
    settings: {
        "import/resolver": {
            typescript: {
                project,
            },
        },
    },
};
