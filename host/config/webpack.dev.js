const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8080/',
  },
  devServer: {
    port: 8080,
    historyApiFallback: {
      historyApiFallback: true,
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {},
      shared: {
        react: {
          singleton: true,
          eager: true,
          requiredVersion: packageJson.dependencies.react,
        },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: packageJson.dependencies['react-dom'],
        },
      },
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
