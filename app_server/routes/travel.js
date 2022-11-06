const express = require('express');
const router = express.Router();
const controller = require('../controllers/travel');

/* Get Home Page. */
router.get('/', controller.travelList);

module.exports = router;