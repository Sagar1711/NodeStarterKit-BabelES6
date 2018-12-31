import http from 'http'
import { env, port, ip, apiRoot } from './config'
// import mongoose from './services/mongoose'
// const setupExpress = require('./services/_express')
import _express from './services/_express'
// import api from './api/rootEnd'
const api = require('./api/rootEnd')

const app = _express(apiRoot, api)
console.log(app)
const server = http.createServer(app)

// mongoose.connect(mongo.uri)
// mongoose.Promise = Promise

setImmediate(() => {
  server.listen(port, ip, () => {
    console.log('Express server listening on http://%s:%d, in %s mode', ip, port, env)
  })
})

export default app
