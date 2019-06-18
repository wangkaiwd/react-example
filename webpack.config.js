const path = require('path');
const absPath = dir => path.resolve(__dirname, `./src/${dir}`);

module.exports = {
  resolve: {
    alias: {
      router: absPath('router'),
      layout: absPath('layout'),
      styles: absPath('assets/styles'),
      views: absPath('views'),
      components: absPath('components'),
      mock: absPath('mock'),
      helper: absPath('helper'),
    },
    extensions: ['.js', '.jsx', '.json', '.scss']
  }
};
