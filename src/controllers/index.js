//Here we will import all our controllers, this way we only need to
//import the controller as a single module, or an explicit constant later!!!
const usersController = require('./users');
const activitiesController = require('./activities');


module.exports = { 
  usersController,
  activitiesController
}