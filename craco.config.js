const CracoAntDesignPlugin = require('craco-antd');
const { whenDev, whenProd } = require('@craco/craco');
module.exports = {
  eslint: {
    enable: false
  },
  devServer: {
    open: false
  },
  plugins: [{ plugin: CracoAntDesignPlugin }]
};
