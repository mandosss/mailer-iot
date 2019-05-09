/**
 * server.js - Set up a server
 * @type {Parsers|*}
 */

/*
 * Provides a way of working with directories and file paths
 * https://www.npmjs.com/package/path
 */
const path = require('path')

/*
 * This is an express server
 * https://www.npmjs.com/package/express
 */
const express = require('express')
const server = express()

/*
 * Middleware for parsing the request body
 * https://www.npmjs.com/package/body-parser
 */
const bodyParser = require('body-parser')
server.use(bodyParser.json())

//server.use(express.json())
server.use(bodyParser.urlencoded({ extended: true })) //it was false
server.use(express.static(path.join(__dirname, 'public')))

/**
 * This takes care of validation and sanitation
 * https://www.npmjs.com/package/express-validator
 */
const  expressValidator = require('express-validator')
server.use(expressValidator())

// parse requests of content-type - application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }))
//cors' stuffies
const cors = require('cors')
server.use(cors())

require('dotenv').config()

/*
 * Set various HTTP headers to help secure the server
 * https://www.npmjs.com/package/helmet
 */
const helmet = require('helmet')
server.use(helmet())

/*
 * Ruby-like logger for logging messages
 * https://www.npmjs.com/package/logger
 */
const logger = require('morgan');
server.use(logger('dev'));

/*
 * Database object modelling
 * https://www.npmjs.com/package/mongoose
 */
const mongoose = require('mongoose')

// Connect to the Mongo database
// mongoose.Promise = global.Promise
// mongoose.connect('mongodb://localhost/carefinder', { useNewUrlParser: true })

// Set up the routes
// -----------------

const apiRoutes = require('./src/routes/api-routes')
server.use('/apinode', apiRoutes)

// Handle errors
// -------------
const errorHandlers = require('./src/middleware/error-handlers')

// Catch all invalid routes
server.use(errorHandlers.invalidRoute)

// Handle mongoose errors
server.use(errorHandlers.validationErrors)

// Export the server object
module.exports = server;
