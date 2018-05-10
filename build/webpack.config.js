var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LessPluginFunctions = require('less-plugin-functions');

module.exports = {
    entry: {
        index: './app/index.js'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: path.resolve(__dirname, '/dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: ['css-loader','postcss-loader',{
                            loader: 'less-loader',
                            options: {
                                plugins: [new LessPluginFunctions({})]
                            }
                        }],
                        publicPath: './'
                    })
            },
            {
                test: /\.(png|jpg|gif|woff|woff2)$/,
                use: 'url-loader?limit=10000'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        })
    ]
    
};
