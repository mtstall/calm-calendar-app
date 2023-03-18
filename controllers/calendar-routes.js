//dependencies
const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Event, User } = require("../models");

// get route for user's events
router.get("/", withAuth, async (req, res) => {
  try {
    const eventData = await Event.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attributes: ["event_name", "description", "startTime", "endTime"],
    });
    const events = eventData.map((event) => event.get({ plain: true }));

    // render events as object
    res.render("calendar", { events, title: "Your Calm Calendar" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// add event route
router.post("/", async (req, res) => {
  try {
  } catch (err) {}
});

module.exports = router;
