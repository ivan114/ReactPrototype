var path = require('path');

module.exports = {
  entry: './jsx/app.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : path.resolve(__dirname, 'jsx'),
        loader : 'babel-loader'
      }
    ]
  }
};