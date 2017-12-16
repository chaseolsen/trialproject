var webpack = require('webpack');
var path = require('path');

// Running webpack or webpack --w will check this file with what to do.
module.exports = {
  context: path.join(__dirname, "src"),
  entry: "./js/client.js",
  module: {
    // Gets loader
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      }
    ]
  },
  // Outputs to client.min.js
  output: {
    path: __dirname + "/src/",
    filename: "client.min.js"
  }
};
