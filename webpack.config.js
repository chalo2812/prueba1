const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  config.resolve.alias["moduleA"] = "moduleB";
  config.watch = true;
  config.minimize = true;
  if (config.mode === "development") {
    config.devServer.compress = false;
  }
  if (config.mode === "production") {
    config.optimization.minimize = false;
  }
  return config;
};
