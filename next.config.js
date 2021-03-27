// @eslint-ignore

let config = {
  target: "serverless",
  webpack: (config, {isDev, isServer}) => {
    // Fixes packages that depend on fs/module module
    if (!isServer) {
      config.node = {fs: "empty", module: "empty"};
    }

    return config;
  },
};

config = require("next-images")(config);

module.exports = config;
