/*
 * This file is used to build the API routes, we may have
 * different routes for views and the like
 */

const express = require('express')

//use the user routes
const userRoutes = require('./users')

//make a new router
const router = express.Router()

//tell it to use the userRoutes
router.use('/users', userRoutes)

module.exports = router
