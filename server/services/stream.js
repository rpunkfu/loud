import path from 'path'

import Koa from 'koa'
import cors from 'koa-cors'
import range from 'koa-range'
import serve from 'koa-static'

const rootPath = path.join(__dirname, '..', 'uploads', 'songs')

export default () => {
  const app = new Koa()

  app
    .use(range)
    .use(cors())
    .use(serve(rootPath))

  return app
}
