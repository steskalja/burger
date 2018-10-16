var express = require("express");

var router = express.Router();


var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  console.log("get");
  burger.all().then((result) => {
    console.log(result);
    res.render("index", result);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create("name", req.body.name).then((result) => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    eaten: req.body.eaten
  }, condition).then((result) => {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


// Export routes for server.js to use.
module.exports = router;
