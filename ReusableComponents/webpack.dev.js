const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const devConfig = merge(common, {
  mode: 'development',
  // tell webpack to point logs and errors to source file
  // and not bundle file
  devtool: 'inline-source-map',
  // tell webpack dev server to serve file from dist folder
  devServer: {
    contentBase: './dist',
  },
});

module.exports = devConfig;
