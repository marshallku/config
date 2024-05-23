const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: ["prettier", "plugin:@tanstack/eslint-plugin-query/recommended"],
    parserOptions: {
        project,
    },
    plugins: ["react", "react-refresh", "jsx-a11y"],
    ignorePatterns: ["node_modules/", "dist/", ".eslintrc.js", "*.cjs", "**/*.config.[jt]s", "**/*.css"],
    globals: {
        JSX: true,
    },
    settings: {
        react: {
            /**
             * Please specify the React version you are using.
             */
            version: "detect",
        },
        "import/resolver": {
            typescript: {
                project,
            },
        },
    },
    overrides: [
        {
            files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
            extends: ["plugin:testing-library/react"],
            rules: {
                "react-refresh/only-export-components": "off",
            },
        },
    ],
    rules: {
        "import/no-default-export": "off",
        "unicorn/filename-case": "off",
        "eslint-comments/require-description": "off",
        "@typescript-eslint/restrict-template-expressions": ["error", { allowNumber: true, allowBoolean: true }],
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
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
        "react/no-unknown-property": "off",
        "react/prop-types": "off",
    },
};
