const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@feature': path.resolve(__dirname, 'src/feature'),
      '@modules': path.resolve(__dirname, 'src/modules'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@shared': path.resolve(__dirname, 'src/shared'),
    },
  },
};