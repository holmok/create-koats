// ENTRY POINT TO RUN STUFFS
const Path = require('path')
process.env.NODE_CONFIG_DIR = Path.join(__dirname, './config')
const { start } = require('./run-server')

start().catch(console.error)
