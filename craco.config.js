const CracoAntDesignPlugin = require('craco-antd');
const sassResourcesLoader = require('craco-sass-resources-loader');
const WebpackBar = require('webpackbar');
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
      components: absPath('components'),
      mock: absPath('mock'),
      helper: absPath('helper'),
    },
    configure: {
      resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss']
      }
    },
    plugins: [
      new WebpackBar()
    ]
  },
  devServer: {
    open: false
  },
  plugins: [
    { plugin: CracoAntDesignPlugin },
    {
      plugin: sassResourcesLoader,
      options: {
        resources: [
          absPath('assets/styles/mixins.scss'),
          absPath('assets/styles/var.scss')
        ],
      },
    },
  ]
};
