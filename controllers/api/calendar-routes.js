const router = require("express").Router();
const withAuth = require('../../utils/auth');
const { User, Event } = require("../../models");

// get route for user's events
router.get("/", withAuth, async (req, res) => {
    try {
      console.log(req.session.user_id);
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
      console.log("This is events: ",events);
  
      res.status(200).json({ events }); // events has to be an object
    } catch (err) {
      res.status(500).json(err); // defining / pathway to go to 
    }
  });

module.exports = router;