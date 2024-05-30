const baseRule = require("./react");

module.exports = {
    ...baseRule,
    extends: [...baseRule.extends, "plugin:@next/next/recommended"],
    rules: {
        ...baseRule.rules,
        "@next/next/no-img-element": "off",
    },
};
