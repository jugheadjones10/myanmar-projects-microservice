var express = require("express")
var path = require("path")  
var cors = require('cors')
const request = require('request')
var { Project } = require("./models/project")


const { locations2, coordsMappings, finalCleaned } = require("./excel-to-mongo/index.js")

var projectsRouter = require("./routes/projects")
//Do I need to add /index.js for the above?

let port = process.env.PORT;
if (port == null || port == "") {
  port = 7000
}

const app = express()

var mongoose = require("mongoose")
var mongoDB = "mongodb+srv://jugheadjones:jugheadjones@trello-power-up-oo71y.mongodb.net/myanmar-map?retryWrites=true&w=majority"

mongoose.connect(mongoDB, { useNewUrlParser: true })
var db = mongoose.connection
db.on("error", console.error.bind(console, "MongoDB connection error:"))


//Cors allows webpack dev server at localhost:8080 to access my myanmar map API
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static("classic/build"))

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname + "/classic/build/index.html"))
})

app.use("/projects", projectsRouter)

app.get("/json", async function(req, res){
  // locations.then(locations => {
    var fulfilledLocations = await locations2
    res.send(fulfilledLocations)
  // })
})

app.get("/coordsMappings", async function(req, res){
  // locations.then(locations => {
    var coordsMappingsFulfilled = await coordsMappings
    res.send(coordsMappingsFulfilled)
  // })
})

app.get("/finalCleaned", async function(req, res){
  var finalCleanedFulfilled = await finalCleaned

  finalCleanedFulfilled.forEach(x => {

    //Ensures that there is AT LEAST ONE valid lat long pair in the array of locations
    var filtered = x.Location.filter(y => {
      if(y.long !== ""){
        return y
      }
    })

    if(filtered.length > 0){

      var locationsArr = x.Location.filter(x => {

        if(x.lat !== ""){
          return x
        }

      }).map(x => {
        return {
          lat: x.long,
          long: x.lat
        }
      })

      Project.create({ 
            _id: new mongoose.mongo.ObjectId(),
            fullName: x["Name of Events"],
            category: x["Specific Type of Project"],
            donationTarget: 1,
            donationCurrent: 1,
            locations: locationsArr,
            updates: x["URL Link to Facebook Post"],
            description: x["Update/ General Description"]
      }, function (err, project_instance) {
        if (err) console.log("There has been the following error: " + err)
        console.log(JSON.stringify(project_instance))
      })

    }
 
  })


  res.send(finalCleanedFulfilled)
})



app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
)
