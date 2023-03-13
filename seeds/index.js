const sequelize = require('../config/connection');
const seedEvent = require('./eventData');
const seedUser = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedEvent();

  await seedUser();

  process.exit(0);
};

seedAll();