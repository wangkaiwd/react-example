const CracoAntDesignPlugin = require('craco-antd');
const path = require('path');
const { whenDev, whenProd } = require('@craco/craco');

const absPath = dir => path.resolve(__dirname, `./src/${dir}`);
module.exports = {
  eslint: {
    enable: false
  },
  webpack: {
    entry: {
      main: './scr/index.jsx'
    },
    alias: {
      router: absPath('router'),
      layout: absPath('layout'),
      styles: absPath('assets/styles'),
      views: absPath('views'),
    },
  },
  devServer: {
    open: false
  },
  plugins: [{ plugin: CracoAntDesignPlugin }]
};
