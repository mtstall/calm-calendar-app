// user to event: one to many
// user to event: one to many
// event to user: one to one

const User = require("./User");
const Event = require("./Event");
// defined relationships between models
Event.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

User.hasMany(Event, {
  foreignKey: "userId",
});

module.exports = { User, Event };
