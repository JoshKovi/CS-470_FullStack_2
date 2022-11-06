const express = require('express');
const router = express.Router();
const controller = require('../controllers/about');


/* GET home page. */
router.get('/', controller.aboutList);
module.exports = router;
