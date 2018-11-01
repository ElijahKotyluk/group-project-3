//import mongoose, our ODM for mongoDB
const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs');

//Define all of its fields, like columns of a SQL table
const definition = {
  name: {
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

userSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

userSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};



//export that user
module.exports = mongoose.model('User', userSchema)
