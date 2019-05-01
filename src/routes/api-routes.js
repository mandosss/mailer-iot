/*
*  All server routes are listed here. 
*  @type {createApplication}
*/

const express = require('express')
const mailRoutes = require('./mail-routes')

const router = express.Router()

//List all of api routes here relative to /api
router.use('/mail', mailRoutes)    //.../api/mailer

module.exports = router