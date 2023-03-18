//dependencies for seed data
const sequelize = require("../config/connection");
const seedEvent = require("./eventData");
const seedUser = require("./userData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedEvent();

  //elegantly closes out server
  process.exit(0);
};

seedAll();
