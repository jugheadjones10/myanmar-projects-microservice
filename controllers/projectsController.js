var Project = require("../models/project")
var GeoJSON = require("geojson")

exports.read_projects = function(req, res) {
    Project.find({}, function(err, projects) {
        if (err) console.log("There has been the following error: " + err)

        res.send(JSON.stringify(projects))
    })
}

exports.read_geojson_projects = function(req, res){
     Project.find({}, function(err, projects) {
       if (err) console.log("There has been the following error: " + err);

        var features = []
        myJson.forEach(element => {
          console.log(element);
          features.push({
            id: element._id,
            date: element.date,
            long: parseInt(element.location[0], 10),
            lat: parseInt(element.location[1], 10)
          })
        })
        return GeoJSON.parse(features, { Point: ["lat", "long"]})
     })
}

exports.read_project = function(req, res) {

}

exports.delete_project = function(req, res) {

}

exports.create_project = function(req, res) {
    Project.create({location: [req.query.long, req.query.lat], date: req.query.date, type: req.query.type }, function(err, project_instance) {
        if (err) console.log("There has been the following error: " + err)
        res.send(JSON.stringify(project_instance))
    })
}

exports.update_proejct = function(req, res) {

}