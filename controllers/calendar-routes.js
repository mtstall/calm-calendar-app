const router = require("express").Router();
//const { Event, User } = require("../models");

// get route for homepage
router.get("/", (req, res) => {
  try {
    res.render("calendar", { title: "Your Calm Calendar" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;