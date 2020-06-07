var mongoose = require("mongoose")

//Define a schema
var Schema = mongoose.Schema

var ProjectSchema = new Schema({
  _id: Schema.Types.ObjectId,
  fullName: String,
  category: String, 
  createdAt: {
    type: Date,
    default: Date.now
  },
  donationTarget: Number,
  donationCurrent: Number,
  locations: [{
    lat: Schema.Types.Decimal128,
    long: Schema.Types.Decimal128
  }],
  updates: [String]
})

//Export function to create "SomeModel" model class
module.exports.Project = mongoose.model("Project", ProjectSchema)
