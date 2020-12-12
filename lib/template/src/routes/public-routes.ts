import Router from '@koa/router'
import { Context } from 'koa'
import { noopHandler } from '../middleware'

const publicRoutes = new Router()

// replace noopHandler with other middleware.
publicRoutes.get('/', noopHandler(), getHome)
publicRoutes.get('/about', noopHandler(), getAbout)

// this is the route handler, exported for testing.
export async function getHome (ctx: Context): Promise<void> {
  await ctx.render('home', { title: 'home' })
}

export async function getAbout (ctx: Context): Promise<void> {
  await ctx.render('about', { title: 'about' })
}

export default publicRoutes
