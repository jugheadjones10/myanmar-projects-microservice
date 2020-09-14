var mongoose = require("mongoose")

var { Project } = require("../models/project")
var GeoJSON = require("geojson")

exports.read_projects = function (req, res) {
  Project.find({}, function (err, projects) {
    if (err) console.log("There has been the following error: " + err)
    res.send(JSON.stringify(projects))
  })
}

exports.read_geojson_projects = function (req, res) {
  Project.find({}, function (err, projects) {
    if (err) console.log("There has been the following error: " + err);

    //Add code for processing projects with multiple locations
    var features = []
    projects.forEach(element => {
      console.log(element)
      features.push({
        _id: element._id,
        createdAt: element.createdAt,
        fullName: element.fullName,
        long: element.locations[0].long,
        lat: element.locations[0].lat,
        category: element.category,
        description: element.description
        // long: parseInt(element.location[0], 10),
        // lat: parseInt(element.location[1], 10)
      })
    })
    res.send(GeoJSON.parse(features, { Point: ["lat", "long"] }))
  })
}

exports.read_project = function (req, res) {
  Project.findById(req.params.id, function(err, project_instance){
    if (err) console.log("There has been the following error: " + err)
    res.send(JSON.stringify(project_instance))
  })
}

exports.delete_project = function (req, res) {

}

exports.create_project = function (req, res) {
  console.log(req.body)
  Project.create({ 
    _id: new mongoose.mongo.ObjectId(),
    fullName: req.body.fullName,
    category: req.body.category,
    donationTarget: req.body.donTarget,
    donationCurrent: req.body.donNow,
    locations: req.body.locations,
    updates: req.body.updates,
    description: req.body.description
  }, 
  function (err, project_instance) {
    if (err) console.log("There has been the following error: " + err)
    res.send(JSON.stringify(project_instance))
  })
}

exports.update_project = function (req, res) {

}