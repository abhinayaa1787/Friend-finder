var express = require("express");
var path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
var PORT = process.env.PORT || 3000;
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  