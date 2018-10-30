//Here is where we declare the modules we will need
const express = require('express')

//import the controllers and middleware
const { usersController } = require('../controllers/index')
const { catchErrors } = require('../middleware/error-handler')

//set up the router
const router = express.Router()

//get all users
router.get('/', catchErrors(usersController.index))

//make a new boy
router.post('/', catchErrors(usersController.store))

//see one boy
router.get('/:id', catchErrors(usersController.show))

//get rid of a boy
router.delete('/:id', catchErrors(usersController.delete))

//update a boy
router.put('/:id', catchErrors(usersController.update))

//show all activities that corresponds to user (can provide query of filtering activities by the completed property)
router.get('/:id/activities', catchErrors(usersController.showActivities))

//add a new activity to a specific user
router.post('/:id/activities', catchErrors(usersController.addActivity))

//update users specific activity that has been completed
router.put('/:id/activities/:activityId', catchErrors(usersController.updateActivityCompleted))


module.exports = router
