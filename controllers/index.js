const express = require ('express');
const router = express.Router();

const homeRoutes = require('./home-routes.js');
const calendarRoutes = require('./calendar-routes.js');

const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/calendar', calendarRoutes); // Line 8 might need to be changed...

router.use('/api', apiRoutes);

module.exports = router;