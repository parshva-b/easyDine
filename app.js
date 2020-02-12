// const config = require('./utils/config')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

const routes = require('./controller/routes')
const middleware = require('./utils/middleware')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
morgan.token('body', function(res, req) { return JSON.stringify( req.body ) })
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.use('/', routes)

app.use(middleware.unknownEndpoint)

module.exports = app