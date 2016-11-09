const fs = require('fs')
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackDashboardPlugin = require('webpack-dashboard/plugin')

const webpackConfig = require('./webpack.config')

const app = express()
const port = process.env.PORT || 3000
const compiler = webpack(webpackConfig)

compiler.apply(new webpackDashboardPlugin())

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))

app.use(express.static(path.join(__dirname, 'static')))

app.get('*', (req, res) => {
  fs
    .createReadStream(path.join(__dirname, 'static', 'index.html'))
    .pipe(res)
})

app.listen(port, 'localhost', (err) => {
  if (err) return console.log(err)
  console.log(`Listening at http://localhost:${port}`)
})
