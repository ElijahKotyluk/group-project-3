//import mongoose, our ODM for mongoDB
const mongoose = require('mongoose')

//Define all of its fields, like columns of a SQL table
const definition = {
  name: {
    type: String
  },
  category: {
    type: String,
    enum: ['Mental', 'Physical'],
    required: true
  },
  description: {
    type: String,
    required: true
  }
}



//make the schema as a new instance of a mongoose schema, using our definition and options
const activitySchema = new mongoose.Schema(definition)

//export that boye
module.exports = mongoose.model('Activity', activitySchema)
