const { Event } = require("../models");

const eventdata = [
    {
        event_name: 'Study',
        description: 'Study for bootcamp coding course',
        startTime: 'March 12, 2023 01:00:00',
        endTime: 'March 12, 2023 03:00:00',
    },
    {
        event_name: 'Work out',
        description: 'Go to the gym',
        startTime: 'March 12, 2023 03:00:00',
        endTime: 'March 12, 2023 05:00:00',
    },
];

const seedEvent = () => Event.bulkCreate(eventdata);

module.exports = seedEvent;