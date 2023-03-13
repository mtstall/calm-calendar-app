const express = require ('express');
const router = express.Router();

const homeRoutes = require('./home-routes.js');
const calendarRoutes = require('./calendar-routes.js');

router.use('/', homeRoutes);
router.use('/calendar', calendarRoutes); // Line 8 might need to be changed...

module.exports = router;