//model dependencies so they can be used together

const User = require("./User");
const Event = require("./Event");

//define relationships between models
User.hasMany(Event, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Event.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Event };
