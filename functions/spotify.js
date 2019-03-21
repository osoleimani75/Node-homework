var keys = require("../secret/keys");
var Spotify = require("node-spotify-api");
var fs = require("fs");


const SpotifyObj = function() {

    this.spotifysongs = function(uQuery) {
        // Default song 
        if (!uQuery) uQuery = "the sign ace of base";
        // Declare Spotify Variable 
        var spotify = new Spotify(keys.Spotify)
        spotify.search({ type: 'track', query: uQuery, limit:10 }, function(err, data) {
                if (err) {
                    return console.log('Error occurred: ' + err);
                }
                // Array of result spotify 
                let songList = data.tracks.items
                const songListArr = [];

                // Show some data of result  
                for (index in songList){  
                        console.log("-".repeat(80));
                        console.log("| Artist       | " + songList[index].artists[0].name + " ".repeat(62-songList[index].artists[0].name.length) + "|")
                        console.log("| Song         | " + songList[index].name + " ".repeat(62-songList[index].name.length) + "|")
                        console.log("| Album        | " + songList[index].album.name + " ".repeat(62-songList[index].album.name.length) + "|")
                        console.log("| Spotify Link | " + songList[index].external_urls.spotify+ " ".repeat(62-songList[index].external_urls.spotify.length) + "|")

                        // Append to log
                        songListArr[index]= [
                            "\n"+"-".repeat(80),
                            "| Artist       | " + songList[index].artists[0].name + " ".repeat(62-songList[index].artists[0].name.length) + "|",
                            "| Song         | " + songList[index].name + " ".repeat(62-songList[index].name.length) + "|",
                            "| Album        | " + songList[index].album.name + " ".repeat(62-songList[index].album.name.length) + "|",
                            "| Spotify Link | " + songList[index].external_urls.spotify+ " ".repeat(62-songList[index].external_urls.spotify.length) + "|"                       
                        ].join("\n")

                        fs.appendFile("log/log.txt", songListArr[index], function(err) {
                            if (err) throw console.log(err);
                            });
                    }
                    console.log("-".repeat(80));
        });


    }
}

module.exports = SpotifyObj;
