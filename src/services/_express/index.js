import cors from 'cors'
// import compression from 'compression'
import morgan from 'morgan'
import express from 'express'
// import bodyParser from 'body-parser'
// import { errorHandler as queryErrorHandler } from 'querymen'
// import { errorHandler as bodyErrorHandler } from 'bodymen'
import { env } from '../../config'
// const express = require('express')

// module.exports = (apiRoot, routes) => {
//   const app = express()

//   /* istanbul ignore next */
//   if (env === 'production' || env === 'development') {
//     app.use(cors())
//     // app.use(compression())
//     app.use(morgan('dev'))
//   }

//   // app.use(bodyParser.urlencoded({ extended: false }))
//   // app.use(bodyParser.json())
//   app.use(apiRoot, routes)
//   // app.use(queryErrorHandler())
//   // app.use(bodyErrorHandler())
//   // console.log(app)
//   return app
// }

export default (apiRoot, routes) => {
  const app = express()

  /* istanbul ignore next */
  if (env === 'production' || env === 'development') {
    app.use(cors())
    // app.use(compression())
    app.use(morgan('dev'))
  }

  // app.use(bodyParser.urlencoded({ extended: false }))
  // app.use(bodyParser.json())
  app.use(apiRoot, routes)
  // app.use(queryErrorHandler())
  // app.use(bodyErrorHandler())
  // console.log(app)
  return app
}

// module.exports = setup
