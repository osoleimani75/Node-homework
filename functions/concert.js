//var Bandsintown = require('bandsintown');
var keys = require("../secret/keys");
var moment = require("moment")
var axios = require("axios");
var fs = require("fs");
const concertObj = function() {

    this.concertList = function(uQuery) {
            // Default song 
            if (!uQuery) uQuery = "the rolling stones";
            var queryUrl = "https://rest.bandsintown.com/artists/" + uQuery + "/events?app_id="+ keys.Concert.apiKey;
            // console.log(queryUrl);
            axios.get(queryUrl).then(
                function (response) {
                    // Show on console
                    var concert = response.data;
                    const concertListArr= [];
                    for (var index in concert){
                        console.log("-".repeat(71));
                        console.log("| Artist/Band     | " + concert[index].lineup[0]  +  " ".repeat(50-concert[index].lineup[0].length)      + "|")
                        console.log("| Venue           | " + concert[index].venue.name +  " ".repeat(50-concert[index].venue.name.length)      + "|")
                        console.log("| Location        | " + concert[index].venue.city + ", " +  concert[index].venue.region +  " ".repeat(50-(concert[index].venue.city+", "+concert[index].venue.region).length)   + "|")
                        console.log("| Date            | " + moment(concert[index].datetime).format("MM/DD/YYYY") +  " ".repeat(50-moment(concert[index].datetime).format("MM/DD/YYYY").length)      + "|")
                        console.log("-".repeat(71));

                    // Append to log
                     concertListArr[index]= [
                       "\n" +"-".repeat(71),
                        "| Artist/Band     | " + concert[index].lineup[0]  +  " ".repeat(50-concert[index].lineup[0].length)      + "|",
                        "| Venue           | " + concert[index].venue.name +  " ".repeat(50-concert[index].venue.name.length)      + "|",
                        "| Location        | " + concert[index].venue.city + ", " +  concert[index].venue.region +  " ".repeat(50-(concert[index].venue.city+", "+concert[index].venue.region).length)   + "|",
                        "| Date            | " + moment(concert[index].datetime).format("MM/DD/YYYY") +  " ".repeat(50-moment(concert[index].datetime).format("MM/DD/YYYY").length)      + "|",
                        "-".repeat(71)
                    ].join("\n")
                
                    fs.appendFile("log/log.txt", concertListArr[index], function(err) {
                        if (err) throw console.log(err);
                      });
                    }
                });
        }
    }
module.exports = concertObj;    