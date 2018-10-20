//bring in the seperate models
const User = require('./user')
const Activity = require('./activity')
//import other models in the same manner

//export em in a good ol' bundle
module.exports = {
  User,
  Activity
}
