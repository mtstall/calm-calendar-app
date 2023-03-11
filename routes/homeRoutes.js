const router = require("express").Router();
const { Event, User } = require("../models/");

// get route for homepage
router.get("/", async (req, res) => {
  try {
    res.render("all", { title: "Calm Calendar" });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
