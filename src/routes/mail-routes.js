const express = require('express')
const mailerController = require('../controller/mail-controller')
const {catchErrors} = require('../middleware/error-handlers')

const router = express.Router()

//user routes
router.post('/send', catchErrors(mailerController.store))

module.exports = router
