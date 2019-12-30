var Project = require("../models/project")

exports.read_projects = function(req, res) {
    Project.find({}, function(err, projects) {
        if (err) console.log("There has been the following error: " + err)

        res.send(JSON.stringify(projects))
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