var keys = require("../secret/keys");
var axios = require("axios");
var fs = require("fs");


const moviesObj = function() {

            this.movieList = function(uQuery) {
            // Default song 
            if (!uQuery) uQuery = "Mr. Nobody.";


            axios.get("http://www.omdbapi.com/?t="+uQuery+"&y=&plot=short&apikey="+keys.Omdb.apiKey).then(
            function(response) {
                        let rTomatoesIndex = response.data.Ratings.findIndex(i => i.Source === "Rotten Tomatoes");
                        if (rTomatoesIndex<0)
                            rottenTomatoes = 'Non'
                        else
                            rottenTomatoes = response.data.Ratings[rTomatoesIndex].Value

                    console.log("-".repeat(161));
                    console.log("| Title           | " + response.data.Title            + " ".repeat(140-response.data.Title.length)      + "|")
                    console.log("| Year            | " + response.data.Year             + " ".repeat(140- response.data.Year.length)      + "|")
                    console.log("| IMDB Rating     | " + response.data.imdbRating       + " ".repeat(140-response.data.imdbRating.length) + "|")
                    console.log("| Tomatoes Rating | " + rottenTomatoes                 + " ".repeat(140-rottenTomatoes.length)           + "|")
                    console.log("| Country         | " + response.data.Country          + " ".repeat(140-response.data.Country.length)    + "|")
                    console.log("| Language        | " + response.data.Language         + " ".repeat(140-response.data.Language.length)   + "|")
                    console.log("| Plot of movie   | " + response.data.Plot.substring(1,141) + " ".repeat(140-response.data.Plot.substring(1,141).length) + "|")
                    console.log("| Actors          | " + response.data.Actors           + " ".repeat(140-response.data.Actors.length)     + "|")
                    console.log("-".repeat(160));

                    // Append to log
                    const movieListArr= [                      
                        "\n" + "-".repeat(161),
                        "| Title           | " + response.data.Title            + " ".repeat(140-response.data.Title.length)      + "|",
                        "| Year            | " + response.data.Year             + " ".repeat(140- response.data.Year.length)      + "|",
                        "| IMDB Rating     | " + response.data.imdbRating       + " ".repeat(140-response.data.imdbRating.length) + "|",
                        "| Tomatoes Rating | " + rottenTomatoes                 + " ".repeat(140-rottenTomatoes.length)           + "|",
                        "| Country         | " + response.data.Country          + " ".repeat(140-response.data.Country.length)    + "|",
                        "| Language        | " + response.data.Language         + " ".repeat(140-response.data.Language.length)   + "|",
                        "| Plot of movie   | " + response.data.Plot.substring(1,141) + " ".repeat(140-response.data.Plot.substring(1,141).length) + "|",
                        "| Actors          | " + response.data.Actors           + " ".repeat(140-response.data.Actors.length)     + "|",
                        "-".repeat(160)
                     ].join("\n")
                 
                     fs.appendFile("log/log.txt", movieListArr, function(err) {
                         if (err) throw console.log(err);
                       });



            });
        }
}
module.exports = moviesObj;