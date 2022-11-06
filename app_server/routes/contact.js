const express = require('express');
const router = express.Router();
const controller = require('../controllers/contact');


/* GET home page. */
router.get('/', controller.contactList);
module.exports = router;