//dependencies
const router = require("express").Router();

const userRoutes = require("./user-routes");
const calendarRoutes = require("./calendar-routes");

//middleware for api routes
router.use("/users", userRoutes);
router.use("/calendar", calendarRoutes);

module.exports = router;
