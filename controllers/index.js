//dependencies
const express = require("express");
const router = express.Router();

const homeRoutes = require("./home-routes.js");
const calendarRoutes = require("./calendar-routes.js");

const apiRoutes = require("./api");

//middleware for controllers
router.use("/", homeRoutes);
router.use("/calendar", calendarRoutes);

router.use("/api", apiRoutes);

module.exports = router;
