import Koa from 'koa'
import Router from 'koa-router'

const songs = [
  { id: 'VqAjTNFfjDNH', name: 'Kuedo - Bismuth' },
  { id: 'DYM8Ld6aYDfL', name: 'Kuedo - Hourglass' },
  { id: 'E5DWy6okl07E', name: 'Kuedo - In Your Sleep' },
  { id: 'ruKTyNh4cxf1', name: 'rpunkfu - 80\'s Pop Synth' },
  { id: 'ZJpeH8IZoa7r', name: 'Flyleaf - All Around Me (Acoustic)' }
]

export default () => {
  const app = new Koa()
  const router = new Router()

  router.get('/songs', async (ctx) => {
    ctx.type = 'text/plain; charset=utf-8'
    ctx.body = songs
  })

  app
    .use(router.routes())
    .use(router.allowedMethods());

  return app
}
