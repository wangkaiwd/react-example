const CracoAntDesignPlugin = require('craco-antd');
const { whenDev, whenProd } = require('@craco/craco');
module.exports = {
  eslint: {
    enable: false
  },
  webpackConfig: {
    entry: {
      main: './scr/index.jsx'
    }
  },
  devServer: {
    open: false
  },
  plugins: [{ plugin: CracoAntDesignPlugin }]
};
