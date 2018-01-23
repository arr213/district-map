const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{ 
      loader: 'babel-loader',
      test: /\.js$/, 
      exclude: /node_modules/
    }]
  },
  devtool: "inline-source-map"
};
