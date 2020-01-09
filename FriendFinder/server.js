var express = require("express");
var path = require("path")


var app = express();

var PORT = process.env.PORT || 3000;



require ("./routing/apiRoutes.js")(app);
require ("./routing/htmlRoutes.js")(app);

app.listen (PORT, function(){
    console.log ("App listening on port:" + PORT);
});
