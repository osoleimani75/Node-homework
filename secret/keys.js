require("dotenv").config();

exports.Spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET,
  callback: process.env.REDIRECT_URI
}
exports.Omdb = {
  apiKey: process.env.OMDB_API_KEY
}

exports.Concert = {
  apiKey: process.env.BAND_API_KEY
}