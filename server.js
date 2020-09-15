var express = require("express")
var path = require("path")  
var cors = require('cors')
const request = require('request')

const { locations2, coordsMappings } = require("./excel-to-mongo/index.js")

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

app.get("/coorsMappings", async function(req, res){
  // locations.then(locations => {
    var coordsMappingsFulfilled = await coordsMappings
    res.send(coordsMappingsFulfilled)
  // })
})


app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
)
