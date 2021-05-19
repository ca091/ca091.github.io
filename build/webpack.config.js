const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const LessPluginFunctions = require('less-plugin-functions')
// const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {
    index: './app/index.js',
  },

  output: {
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
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
        use: [
            // devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            {
              loader: 'less-loader',
              options: {
                plugins: [new LessPluginFunctions({})]
              }
            }
        ]
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        use: 'url-loader?limit=10000'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name].css"
    })
  ]
}
