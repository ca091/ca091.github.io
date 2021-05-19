const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('./webpack.config.js');

module.exports = merge.merge(config, {
  mode: 'development',
  devServer: {
    inline: true,
    port: 8082,
    // contentBase: [path.join(__dirname, '../app'), path.join(__dirname, '../asset')]
    // contentBase: path.join(__dirname, '../app'),
    host: '0.0.0.0' // solve ip can't visit
  },
  plugins: [
    new webpack.DefinePlugin({
      env: JSON.stringify("dev"),
    })
  ]
});
