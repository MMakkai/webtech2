var express = require('express')
, bodyParser = require('body-parser')

var cors = require('cors')
var app = express()
app.use(cors())
app.use(bodyParser.json())


app.get("/getgames", (req, res) => {

    var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Default1234",
  database: "gamedb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM games", function (err, result, fields) {
    if (err) throw err;
    res.send(result);
  });
});
});

app.post("/deletegame", (req, res) => {
 var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Default1234",
  database: "gamedb"
});

con.connect(function(err) {
  if (err) throw err;

  con.query("DELETE FROM games WHERE GAMENAME ='"+req.body.name+"';", function (err, result, fields) {
    if (err) throw err;
    res.send(result);
  });
});
});


app.post("/savegame", (req, res) => {
    var mysql = require('mysql');
   var con = mysql.createConnection({
     host: "localhost",
     user: "root",
     password: "Default1234",
     database: "gamedb"
   });
   
   con.connect(function(err) {
     if (err) throw err;
   
     con.query("INSERT INTO games (gamename, quantity, author) VALUES ('"+req.body.name+"','"+req.body.quantity+"','"+req.body.publisher+"');", function (err, result, fields) {
       if (err) throw err;
       res.send(result);
     });
   });
   });


app.listen(3000,()=>{
    console.log("Listening to 3000");
})