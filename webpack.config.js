const path = require('path')
const combineLoaders = require('webpack-combine-loaders')

const postcssNext = require('postcss-cssnext');
const postcssReporter = require('postcss-reporter');

const clientPath = path.join(__dirname, 'client')
const assetsPath = path.join(__dirname, 'assets')
const outputPath = path.join(__dirname, 'dist', 'client')

module.exports = {
  devtool: 'eval-source-map',

  entry: [
    'babel-polyfill',
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
      },
      {
        test:   /\.css$/,
        loader: combineLoaders([
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              importLoaders: 1,
              camelCase: 'dashes',
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader'
          }
        ])
      }
    ]
  },

  postcss: () => [
    postcssNext({
      browsers: ['last 2 versions', 'IE > 10'],
    }),
    postcssReporter({
      clearMessages: true,
    })
  ],

  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', clientPath, assetsPath]
  }
}
