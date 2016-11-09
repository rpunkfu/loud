import Koa from 'koa'
import mount from 'koa-mount'
import logger from 'koa-logger'

import songApi from './api/song'
import streamService from './services/stream'

const run = () => {
  const app = new Koa()

  app.use(logger())
  app.use(mount('/api', songApi()))
  app.use(mount('/stream', streamService()))

  app.listen(3030)
}

run()
