// user to event: one to many
// user to event: one to many
// event to user: one to one

const User = require("./User");
const Event = require("./Event");
// defined relationships between models

User.hasMany(Event, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Event.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Event };
