// configures, composes, and starts the koa web server.
import { createServer, Server } from 'http'
import { Logger } from 'pino'
import { IConfig } from 'config'
import KoaLogger from 'koa-pino-logger'
import Koa from 'koa'
import BodyParser from 'koa-bodyparser'
import Hbs from 'koa-hbs'
import Static from 'koa-static'

import Routes from './routes'

import { errorHandler } from './middleware'

export class WebServer {
  config: IConfig
  logger: Logger
  server: Server
  app: Koa<Koa.DefaultState, Koa.DefaultState>
  available: Boolean
  shuttingDown: Boolean
  constructor (config: IConfig, logger: Logger) {
    this.config = config
    this.logger = logger
    this.app = new Koa()
    this.server = createServer(this.app.callback)
    this.available = false
    this.shuttingDown = false
  }

  async start (): Promise<void> {
    try {
      // handles logging middleware
      this.app.use(KoaLogger({ logger: this.logger }))

      // handles keys for signing cookies
      this.app.keys = this.config.get('keys')

      // handles shut downs and server state
      this.app.use(async (ctx, next) => {
        if (!this.available) {
          // this will not process requests while server is shutting down.
          ctx.throw(503)
        } else {
          // add other serve stateful things here like global variables, data connections, etc.
          ctx.state.siteName = this.config.get('siteName')
          ctx.state.config = this.config
          await next()
        }
      })

      // handles error
      this.app.use(errorHandler())

      // handles request bodies/forms
      this.app.use(BodyParser(this.config.get('bodyParser')))

      // handled static assets
      const { root, opts } = this.config.get('staticOptions')
      this.app.use(Static(root, opts))

      // handles handlebars view engine
      this.app.use(Hbs.middleware(this.config.get('hbs')))

      // handles all the routes
      Routes.forEach(route => {
        this.app.use(route.routes()).use(route.allowedMethods())
      })

      // handles starting up the server.
      const { host, port } = this.config.get('server')
      this.app.listen(port, host, () => {
        this.available = true
        this.logger.info(`Server running at http://${host}:${port}`)
      })
    } catch (error) {
      this.logger.error(`Failed to start server: ${error.message}`)
      this.logger.error(error.stack)
    }
  }

  async stop (): Promise<void> {
    if (this.server && !this.shuttingDown) {
      try {
        this.logger.info('stop server called')
        this.shuttingDown = true
        this.available = false
        // put any shutdown processes here (closing data connections, etc.)
      } catch (error) {
        this.logger.error(`Failure during server shutdown: ${error.message}`)
        this.logger.error(error.stack)
      }
    }
  }
}
