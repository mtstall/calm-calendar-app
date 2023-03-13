const express = require ('express');
const router = express.Router();

const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);


module.exports = router;