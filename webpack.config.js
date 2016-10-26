const path = require('path')

const clientPath = path.join(__dirname, 'client')
const outputPath = path.join(__dirname, 'dist', 'client')

module.exports = {
  devtool: 'eval-source-map',

  entry: [
    path.join(clientPath, 'index.js')
  ],

  output: {
    path: outputPath,
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', clientPath]
  }
}
