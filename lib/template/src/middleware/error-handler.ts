import { Middleware } from 'koa'

// handles errors here...
export const errorHandler = (): Middleware => {
  return async (ctx, next) => {
    try {
      await next()
      const status = ctx.status || 404
      if (status === 404) {
        ctx.throw(404)
      }
    } catch (error) {
      ctx.status = error.statusCode || error.status || 500

      // based on status, handle error.
      switch (ctx.status) {
        case 401:
          // just log 401, don't do anything weird.  Let any auth middleware handle it.
          ctx.log.error('UNHANDLED ERROR: %s\n%s', error.message, error.stack)
          break
        case 503:
          // simple text message
          ctx.body = 'server not available'
          break
        default:
          // render page showing error context
          await ctx.render('error', {
            title: `error: ${error.message}`,
            status: ctx.status,
            message: error.message,
            stack: process.env.NODE_ENV !== 'production' ? error.stack : undefined
          })
      }
    }
  }
}
