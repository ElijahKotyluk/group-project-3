/*
 * This file is used to build the API routes, we may have
 * different routes for views and the like
 */

const express = require('express')

//use the user routes
const userRoutes = require('./users')

//use the activity routes
const activityRoutes = require('./activities')

//use the auth auth routes
const auth = require('./auth')

//make a new router
const router = express.Router()

//tell it to use the userRoutes
router.use('/users', userRoutes)

//tell it to use the activityRoutes
router.use('/activities', activityRoutes)

//tell it to use the auth
router.use('/api/auth', auth)

module.exports = router
