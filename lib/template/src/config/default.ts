import Path from 'path'

export const siteName = '{{name}}'

// pino logger settings
export const pino = {
  level: process.env.LOG_LEVEL || 'debug',
  name: process.env.LOG_NAME || '{{name}}'
}

// bodyParser settings
export const bodyParser = {}

// server settings, host and port required, but looks in ENV_VARS
export const server = {
  host: process.env.SERVER_HOST || 'localhost',
  port: parseInt(process.env.SERVER_PORT || '8080')
}

// static assets settings
export const staticOptions = {
  root: Path.join(__dirname, '../static'),
  opts: {}
}

// handlebars settings
export const hbs = {
  viewPath: Path.join(__dirname, '../templates/pages'),
  layoutsPath: Path.join(__dirname, '../templates/layouts'),
  partialsPath: Path.join(__dirname, '../templates/partials'),
  defaultLayout: 'basic',
  disableCache: true
}

// keys used to sign cookies
// TODO:CHANGE THESE KEYS!!!
export const keys = [
  'Cbhshk9qKrIyGyDz8OYgBTa',
  'secret_keys',
  'hYhsvVKg1hkz8OGYgBTa',
  'for_signed_cookies',
  'zYCoIx3m0lX2KCbWIrMO',
  'in_koa_web_server',
  'JoWIrGhYM59fSmvL8'
]
