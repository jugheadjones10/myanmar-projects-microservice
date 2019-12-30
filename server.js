var express = require("express")
var projectsRouter = require("./routes/projects")
//Do I need to add /index.js for the above?

const app = express()

var mongoose = require("mongoose")
var mongoDB = "mongodb+srv://jugheadjones:jugheadjones@trello-power-up-oo71y.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(mongoDB, { useNewUrlParser: true })
var db = mongoose.connection
db.on("error", console.error.bind(console, "MongoDB connection error:"))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/projects", projectsRouter)

app.listen(7000, () =>
  console.log(`Example app listening on port ${7000}!`)
)