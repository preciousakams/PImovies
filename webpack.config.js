const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
    open: true,
    compress: true,
    port: 8080,
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(svg|gif|png|jpg|jpeg)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.html$/i,
      loader: 'html-loader',
    },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html', // output file
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/contact.html'),
      filename: 'contact.html', // output file
    }),
  ],
};