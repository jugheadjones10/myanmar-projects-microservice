var mongoose = require("mongoose")

//Define a schema
var Schema = mongoose.Schema

var ProjectSchema = new Schema({
  location_url: String,
  date: String,
  type: {
    type: String,
    enum: ["Waterwell", "School", "Rice"]
  }
})

//Export function to create "SomeModel" model class
module.exports = mongoose.model("ProjectModel", ProjectSchema)
