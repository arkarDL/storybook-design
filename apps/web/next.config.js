const withTM = require("next-transpile-modules")([ "storybookui"]);

module.exports = withTM({
  reactStrictMode: true,
});
