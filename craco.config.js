const CracoAntDesignPlugin = require('craco-antd');
const { whenDev, whenProd } = require('@craco/craco');
module.exports = {
  eslint: {
    enable: false
  },
  plugins: [{ plugin: CracoAntDesignPlugin }]
};
