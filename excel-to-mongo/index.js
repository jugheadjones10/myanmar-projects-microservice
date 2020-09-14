const csvtojson = require("csvtojson")

const locations = csvtojson()
    .fromFile("gvh-data-2.csv")
    .then(csvData => {
        //console.log(csvData);
        return csvData.map(x => x.Location)
    })

const locations2 = csvtojson()
    .fromFile("gvh-data-2.csv")
    .then(csvData => {

        var locationsArr = []
        var dataArr = []

        csvData.map(x => {
            //Splitting URL links by next line characters
            x["URL Link to Facebook Post"] = x["URL Link to Facebook Post"].split(/\n\n|\n/)
            return x
        }).map(x => {
            //Deleting useless properties
            delete x["Date"]
            delete x["Goals/Desired Outcome"]
            delete x["Photos"]
            return x
        }).map(x => {
            //Splitting locations by next line characters
            x["Location"] = x["Location"].split(/\n\n|\n/)
            return x
        }).map(x => {
            //Removing whitespace from locations
            x["Location"].forEach((item, i) => {
                x["Location"][i] = item.trim()
            })
            return x
        }).forEach(x => {
            //console.log(x)
            dataArr = dataArr.concat(x)
            locationsArr = locationsArr.concat(x["Location"])
        })

        return dataArr
        // return locationsArr
    })
    
    // .then(y => {
    //     console.log(y)
    // })


exports.locations = locations
exports.locations2 = locations2


//Data cleaning to do: 
//Make list of unique locations and work with Linus to obtain latitude longitude pairs 
//Parse locations so that multiple line locations are parsed into an array

// Steps for cleaning of geo data :
//Suggestions : instead of using a random number as the id, use the SEARCHABLE NAME of the place as the ID.
//Then I can automatically find the latitude and longitude with the Google geocoding API.
//Instead of making a separate mongoDB collection, include a "searchable array" property and 
//a "long and lat array" property for each project data point. We can "hydrate" the 
//long and lat array property automatically by using the Geolocation API. 

// 1. Assign each UNIQUE location to an index no.
// 2. Replace all locations inside the original geolocations json with the index no.
// 3. Assign a latitude and longitude to each index.
// 4. Upload to mongodb collection with the index serving as ID and with properties long, lat, and name. 
