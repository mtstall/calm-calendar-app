const { Event } = require("../models");

//hardcoded events as example of what it can do dynamically using session,
//fullCalendar.io etc etc

const eventdata = [
  {
    user_id: 1,
    event_name: "Study",
    description: "Study for bootcamp coding course",
    startTime: "March 12, 2023 01:00:00",
    endTime: "March 12, 2023 03:00:00",
  },
  {
    user_id: 1,
    event_name: "Work out",
    description: "Go to the gym",
    startTime: "March 12, 2023 03:00:00",
    endTime: "March 12, 2023 05:00:00",
  },
];

const seedEvent = () => Event.bulkCreate(eventdata);

module.exports = seedEvent;
