
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./alexa_backend_lambda.cjs.production.min.js')
} else {
  module.exports = require('./alexa_backend_lambda.cjs.development.js')
}
