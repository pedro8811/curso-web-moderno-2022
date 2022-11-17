const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './src/principal.js',
  output: {
    filename: 'principal.js',
    path: __dirname + '/public'
  },
  plugis: [
    new MiniCssExtractPlugin({
      filename: "estilo.css"
    })
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'style-loader', // Adiciona CSS a DOM injetando a tag <style>
        'css-loader'
      ]
    }]
  }
}