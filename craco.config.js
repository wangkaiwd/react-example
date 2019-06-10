const CracoAntDesignPlugin = require('craco-antd');
const path = require('path');
const { whenDev, whenProd } = require('@craco/craco');
const absPath = dir => path.resolve(__dirname, `./src/${dir}`);
module.exports = {
  eslint: {
    enable: false
  },
  // style: {
  //   sass: {
  //     loaderOptions: {
  //       includePaths: [absPath('assets/styles/mixins.scss')]
  //     }
  //   },
  // },
  babel: {
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }]
    ]
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
      components: absPath('components'),
      mock: absPath('mock'),
    },
    configure: {
      resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss']
      }
    }
  },
  devServer: {
    open: false
  },
  plugins: [{ plugin: CracoAntDesignPlugin }]
};
