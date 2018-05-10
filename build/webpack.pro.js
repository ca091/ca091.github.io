const merge = require('webpack-merge');
const config = require('./webpack.config.js');
const outConfig = merge(config, {
    mode: 'production'
});
module.exports = outConfig;