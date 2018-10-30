//Here is where we declare the modules we will need
const express = require('express')

//import the controllers and middleware
const { activitiesController } = require('../controllers/index')
const { catchErrors } = require('../middleware/error-handler')

//set up the router
const router = express.Router()

//get all activities
router.get('/', catchErrors(activitiesController.index))

//make a new activity
router.post('/', catchErrors(activitiesController.store))

//see one activity
router.get('/:id', catchErrors(activitiesController.show))

//get rid of an activity
router.delete('/:id', catchErrors(activitiesController.delete))

//update an activity
router.put('/:id', catchErrors(activitiesController.update))

module.exports = router
