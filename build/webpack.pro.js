const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('./webpack.config.js');
const outConfig = merge(config, {
    mode: 'production',
	plugins: [
		new webpack.DefinePlugin({
			env: JSON.stringify("pro"),
		})
    ]
});
module.exports = outConfig;