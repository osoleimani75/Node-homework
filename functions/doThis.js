var fs = require("fs");

const doThis = function() {
    var text;
    this.readData = function(callback) {
        fs.readFile("log/query.txt", "utf8", function(err,data){
            if (err) return console.log(err)
            dataArr = data.split(',');
            userComand = dataArr[0];
            userQuery = dataArr[1];
            callback(userComand,userQuery);

        }
        )};
 };
  
  module.exports= doThis