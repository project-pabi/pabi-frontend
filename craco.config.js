const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.join(__dirname, 'src/'),
      '@public': path.join(__dirname, 'public/'),
      '@component': path.join(__dirname, 'src/components/'),
      '@router': path.join(__dirname, 'src/router/'),
      '@pages': path.join(__dirname, 'src/pages/'),
      '@store': path.join(__dirname, 'src/store/'),
      '@stores': path.join(__dirname, 'src/stores/'),
      '@plugin': path.join(__dirname, 'src/plugin/'),
      '@assets': path.join(__dirname, 'src/assets/'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@(.*)$': '<rootDir>/src$1',
      },
    },
  },
};
