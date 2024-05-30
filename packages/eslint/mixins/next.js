module.exports = {
    ...require("./react"),
    extends: [...require("./react").extends, "plugin:@next/next/recommended"],
};
