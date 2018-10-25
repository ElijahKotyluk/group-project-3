//import the Activity constant explicitly
const { Activity } = require('../database/models')
const trunks = require('trunks-log')
const log = new trunks('Activities')

//show all activities
exports.index = async (req, res) => {
  
    //query the DB of all activities
    await Activity.find().exec()
    .then(activities => {
      log.success('Retrieved all {} activities', activities.length)
      res.json({ activities: activities})
    })
    .catch(err => {
      log.error(err, 'Could not retrieve activities: {}', err.message)
      res.json({ error: err, message: "Could not retrieve activities"}).status(500)
    })
  }
  
  //Store a new activity
exports.store = async (req, res) => {
  
    let activity = new activity(req.body)
  
    //save it in the DB
    await activity.save()
      .then(activity => {
        log.success('Created activity: {}', activity.description)
        //send a 201 and the new resource
        res.status(201).json({ data: activity })
      })
      .catch(err => {
        log.error(err, 'Error creating activity: {}', activity.description)
        let errStatus = err.name === 'ValidationError' ? 400 : 500
        res.status(errStatus).json({err: err})
      })
  }
  
  //this function is for looking at one activity by their mongo id
  exports.show = async (req, res) => {
  
    //find this sneaky boye
    await activity.findById(req.params.id).exec()
    .then(activity => {
      log.success('Found activity: {}', activity.category)
      res.json({ activity: activity})
    })
    .catch(err => {
      log.error(err, 'Error finding activity: {}', req.params.id)
      res.json({ error: err, message: 'Could not retrieve activity'}).status(500)
    })
  }
  
  //ever wanted to make the activities disappear 
  exports.delete = async (req, res) => {
  
    //find the sneaky boye and make him go away
    await activity.findByIdAndRemove(req.params.id).exec()
    .then(() => {
      log.success('Deleted activity: {}', req.params.id) 
      //let em know there aint no content no mo
      res.status(204).json()
    })
    .catch(err => {
      log.error(err, 'Error finding activity: {}', req.params.id)
      res.status(500).json({err: err})
    })
  
  }
  
  //edit a activity based on ID
  exports.update = async (req, res) => {
    await activity
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .exec()
      .then(activity => {
        log.success('Updated activity: {}', req.params.id)
        res.status(200).json({activity: activity})
      })
      .catch(err => {
        log.error(err, "Could not update activity: {}", req.params.id)
        res.status(500).json({err: err})
      })
  }
  