import path from 'path'

import Koa from 'koa'
import serve from 'koa-static'

const rootPath = path.join(__dirname, '..', 'uploads', 'songs')

export default () => {
  const app = new Koa()

  app.use(serve(rootPath))

  return app
}
