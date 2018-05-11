const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('./webpack.config.js');
const outConfig = merge(config, {
    mode: 'development',
	plugins: [
		new webpack.DefinePlugin({
			env: JSON.stringify("dev"),
		})
	]
});
module.exports = outConfig;