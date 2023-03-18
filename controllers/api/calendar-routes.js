const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { User, Event } = require("../../models");

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
    res.status(200).json({ events });
  } catch (err) {
    res.status(500).json(err);
  }
});

// post route to create a new event
router.post("/", withAuth, async (req, res) => {
  try {
    const newEvent = await Event.create({
      event_name: req.body.event_name,
      description: req.body.description,
      user_id: req.session.user_id,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
    });
    res.status(200).json(newEvent);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
