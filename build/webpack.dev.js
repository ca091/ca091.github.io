const merge = require('webpack-merge');
const config = require('./webpack.config.js');
const outConfig = merge(config, {
    mode: 'development'
});
module.exports = outConfig;