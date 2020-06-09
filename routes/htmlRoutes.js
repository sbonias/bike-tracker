// requiring express and calling a function on it (router function)
// this is creating a new router object for us
const router = require("express").Router();

// module provided by node
const path = require("path");

// add our routes
// HTML route for displaying the homepage
router.get("/", (req, res) => {
  // build your path variable
  // .. is how we get back a directory
  const filePath = path.join(__dirname, "..", "public", "html", "index.html");
  res.sendFile(filePath);
});

// this is going to export the router that we created to include all
// of our routes
module.exports = router;
