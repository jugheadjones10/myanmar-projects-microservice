var mongoose = require("mongoose")

//Define a schema
var Schema = mongoose.Schema

var UpdateSchema = new Schema({
    _id: Schema.Types.ObjectId,
    url: String,
})

//Export function to create "SomeModel" model class
module.exports.UpdateSchema = UpdateSchema
module.exports.Update = mongoose.model("Update", UpdateSchema)
