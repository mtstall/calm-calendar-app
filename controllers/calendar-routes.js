const router = require("express").Router();
const withAuth = require('../utils/auth');
const { Event, User } = require("../models");

// get route for calendar dashboard
// router.get("/", (req, res) => {
//   try {
//     res.render("calendar", { title: "Your Calm Calendar" });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// get route for user's events
router.get("/", withAuth, async (req, res) => {
  try {
    const eventData = await Event.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attributes: [
        'event_name',
        'description',
        'startTime',
        'endTime'
      ],
    });
    const events = eventData.map((event) => event.get({ plain: true}));

    res.render('calendar',{ events }); // events has to be an object
  } catch (err) {
    res.status(500).json(err); // defining / pathway to go to 
  }
});

// add event route
router.post("/", async (req, res) => {
  try{

  } catch (err) {

  }
})

module.exports = router;
