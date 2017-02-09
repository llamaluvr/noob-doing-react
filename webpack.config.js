var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.jsx', /*It will bundle everything referenced directly or indirectly by this file*/
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build') /*This sets the output directory for EVERYTHING, not just the js*/
  },
  devtool: 'eval-source-map', /*Adds source mapping*/
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.jsx$/, /*This is needed for the JSX files*/
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
          presets: ['es2015', 'react']
      }
    },
    {
      test: /\.css$/, /* This selects the css files for bundling*/
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    }]
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"), /*This actually bundles the CSS files*/
    new CopyWebpackPlugin([
            //copies to {output}/file.txt
            { from: 'src/index.html'} /*This makes sure index.html gets copied over*/
          ])
  ]
};