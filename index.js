var Concert = require('./functions/concert');
var Spotify = require('./functions/spotify');
var Movies  = require('./functions/movie');
var DoThis = require('./functions/doThis');

let userComand = process.argv[2];
let userQuery = process.argv.slice(3).join(' ');

function commandProcess(uCommand,uQuery){
   switch (uCommand) {
    case "concert":
        var concert = new Concert()
        concert.concertList(uQuery) 
        break;
    case "spotify":
        var spotify = new Spotify()
        spotify.spotifysongs(uQuery)     
        break;
    case "movie":
        var movies = new Movies()
        movies.movieList(uQuery)   
        break;            
     case "do-this":
     var doThis = new DoThis()
        doThis.readData(commandProcess)
       break;  
     default:
     console.log('*'.repeat(66)) 
     console.log('*'+ ' '.repeat(64)+'*') 
     console.log('* Please, use one of Commands (concert, spotify, movie, do-this) *')
     console.log('*'+ ' '.repeat(64)+'*') 
     console.log('*'.repeat(66)) 
     break;
   }
} 
commandProcess(userComand,userQuery);
