const { User } = require('../database/models')
const trunks = require('trunks-log')
const log = new trunks('USERS')
const mongoose = require('mongoose')

//show all users
exports.index = async (req, res) => {
  console.log("show all users")
  //query the DB of all users
  await User.find().exec()
  .then(users => {
    log.success('Retrieved all {} users', users.length)
    res.json({ users: users})
  })
  .catch(err => {
    log.error(err, 'Could not retrieve users: {}', err.message)
    res.json({ error: err, message: "Could not retrieve users"}).status(500)
  })
}

//Store a new user
exports.store = async (req, res) => {

  let user = new User(req.body)
  //save it in the DB
  await user.save()
    .then(user => {
      log.success('Created User: {}', user.email)
      //send a 201 and the new resource
      res.status(200).json({ data: user })
    })
    .catch(err => {
      log.error(err, 'Error creating user: {}', user.email)
      let errStatus = err.name === 'ValidationError' ? 400 : 500
      res.status(errStatus).json({err: err})
    })
}

//this function is for looking at one user by their mongo id
exports.show = async (req, res) => {

  //find this sneaky user
  await User.findById(req.params.id).exec()
  .then(user => {
    log.success('Found user: {}', user.name)
    res.json({ user: user})
  })
  .catch(err => {
    log.error(err, 'Error finding user: {}', req.params.id)
    res.json({ error: err, message: 'Could not retrieve user'}).status(500)
  })
}

//ever wanted to make the users disappear
exports.delete = async (req, res) => {

  //find the sneaky user and make him go away
  await User.findByIdAndRemove(req.params.id).exec()
  .then(() => {
    log.success('Deleted User: {}', req.params.id)
    //let em know there aint no content no mo
    res.status(204).json()
  })
  .catch(err => {
    log.error(err, 'Error finding user: {}', req.params.id)
    res.status(500).json({err: err})
  })

}

//edit a user based on ID
exports.update = async (req, res) => {
  await User
  .findByIdAndUpdate(req.params.id, req.body, { new: true })
  .exec()
    .then(user => {
      log.success('Updated user: {}', req.params.id)
      res.status(200).json({user: user})
    })
    .catch(err => {
      log.error(err, "Could not update user: {}", req.params.id)
      res.status(500).json({err: err})
    })
}

//show all activities of a specific user (can provide query of filtering activities by the completed property)
exports.showActivities = async (req, res) => {
  console.log("show activities");
  await User.findById(req.params.id).populate("activities.activityId").exec()
  .then(user => {
    // completed is an optional parameter that will either be true, false, or undefined
    // it's passed in as a string, so we want to convert it to a Boolean
    const completed = req.query.completed ? JSON.parse(req.query.completed) : undefined;
    console.log("query completed:", req.query.completed)

    let activities = user.activities;

    if (completed == true) {
      console.log(true)
      activities = activities.filter(activity => activity.completed === true)
    }
    // We want to explicitly specify 'false', because we don't want this to run if completed is undefined.
    else if (completed == false) {
      console.log(false)
      activities = activities.filter(activity => activity.completed === false)
    }
    // If completed is not true, false, or undefined, then completed must be an invalid value.
    else if (completed !== undefined) {
      return res.status(500).json("error: 'completed' must be either true or false");
    }

    log.success('Found user: {}', user.name)
    res.json(activities);
  })
  .catch(err => {
    log.error(err, 'Error finding user: {}', req.params.id)
    res.json({ error: err, message: 'Could not retrieve user'}).status(500)
  })
}

//adding specific activity to user's array of activities
exports.addActivity = async (req, res) => {
  console.log("add activity")
  await User
  .findByIdAndUpdate(req.params.id,
    {$push: {activities: {activityId: req.body.activityId, completed: false} }},
    { new: true })
  .exec()
    .then(user => {
      log.success('Updated user: {}', req.params.id)
      res.status(200).json({user: user})
    })
    .catch(err => {
      log.error(err, "Could not update user: {}", req.params.id)
      res.status(500).json({err: err})
    })
}

//updating users specific activity's completed property to either true or false
//accepts in the request body a 'completed' property, e.g. { completed: true/false/1/0 }
exports.updateActivityCompleted = async (req, res) => {
  console.log("updateActivityCompleted")

  const completed = req.body.completed;

  if (completed != true && completed != false) {
    console.log("completed", completed)
    return res.status(500).json("error: 'completed' must be either true or false");
  }

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(500).json("must provide a valid user id");
  }

  if (!mongoose.Types.ObjectId.isValid(req.params.activityId)) {
    return res.status(500).json("must provide a valid activityId");
  }

  await User
  .update({ "_id": req.params.id, "activities.activityId": req.params.activityId },
    { $set: { "activities.$.completed": completed} },
    { new: true })
  .exec()
    .then(user => {
      log.success('Updated user: {}', req.params.id)
      res.status(200).json({user: user})
    })
    .catch(err => {
      log.error(err, "Could not update user: {}", req.params.id)
      res.status(500).json({err: err})
    })
}
