var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser")
var multer = require("multer");
var upload = multer({dest: "uploads/"});
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

//app.get("/", (req, res, next)=> {
  //  res.sendFile(__dirname + "/index.html");
//})//
app.use(express.static(__dirname + '/public'));

app.post('/upload', upload.single('file'), function(req, res, next){
return res.json(req.file);
})

app.listen(4000, function(){
    console.log("Working!");
})