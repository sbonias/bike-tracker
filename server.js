// pull in express
const express = require("express");

// create our app to listen
const app = express();

// create a port
const PORT = 8080;

// including api routes that are being exported
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// making sure that all the routes defined in routes folder get added
// to this file
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// have app listen
app.listen(PORT, () => {
  // have app do something after it listens
  console.log(`Server is listening at http://localhost:${PORT}`);
});
