//import mongoose, our ODM for mongoDB
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const mongoosePaginate = require('mongoose-paginate')

//Define all of its fields, like columns of a SQL table
const definition = {
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String, 
    unique: true,
    required: true
  },
  activities: [{
    activityId: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'Activity',
     required: true
    },
    completed: {
      type: Boolean,
      default: false
    }
  }]
}

//Set any options for the schema
const options = {
  timestamps: true
}

//make the schema as a new instance of a mongoose schema, using our definition and options
const userSchema = new mongoose.Schema(definition, options)



//export that user
module.exports = mongoose.model('User', userSchema)
