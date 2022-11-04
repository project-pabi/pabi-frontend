const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.join(__dirname, "src/"),
      "@public": path.join(__dirname, "public/"),
      "@component": path.join(__dirname, "src/components/"),
      "@router": path.join(__dirname, "src/router/"),
      "@pages": path.join(__dirname, "src/pages/"),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "^@(.*)$": "<rootDir>/src$1",
      },
    },
  },
};
