var express = require('express')
var router = express.Router()

var project_controller = require("../controllers/projectsController")

router.get("/", project_controller.read_projects)
router.get("/geojson", project_controller.read_geojson_projects)
router.get("/:id", project_controller.read_project)

router.delete("/:id", project_controller.delete_project)

router.post("/", project_controller.create_project)

router.put("/:id", project_controller.update_proejct)

module.exports = router