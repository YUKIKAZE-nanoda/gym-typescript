// prettier.config.js
module.exports = {
    const esmRequire = require("esm")(module);
    const prettierPluginTailwindcss = esmRequire("prettier-plugin-tailwindcss");

    module.exports = {
        plugins: [prettierPluginTailwindcss],
    };
