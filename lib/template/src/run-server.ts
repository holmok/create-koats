// sets up config and logger and SIGs for handling server shutdown
import Config from 'config'
import Pino from 'pino'
import { WebServer } from './web-server'

export async function start () {
  const logger = Pino(Config.get('pino'))
  const server = new WebServer(Config, logger)
  process.once('SIGINT', server.stop)
  process.once('SIGTERM', server.stop)
  server.start().catch(logger.error)
}
