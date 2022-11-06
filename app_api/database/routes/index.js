const express = require('express');
const router = express.Router();
const {expressjwt: jwt} = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: "payload",
    algorithms: ["HS256"],
});

require('../models/user');
const authController = require('../controllers/authentication');
router.route('/login').post(authController.login);
router.route('/register').post(authController.register);

require("../models/travlr");
const tripsController = require("../controllers/trips");
router.route('/trips').get(tripsController.tripsList)
    .post(auth, tripsController.tripsAddTrip);
router.route('/trips/:tripCode').get(tripsController.tripsFindCode)
    .put(auth, tripsController.tripsUpdateTrip)
    .delete(auth, tripsController.tripsDeleteTrip);


require("../models/rooms");
const roomsController = require("../controllers/rooms");
router.route('/rooms').get(roomsController.roomList);
router.route('/rooms/:roomByName').get(roomsController.roomByName);

require("../models/meals");
const mealsController = require("../controllers/meals");
router.route('/meals').get(mealsController.mealList);
router.route('/meals/:mealByName').get(mealsController.mealByName);

require("../models/news");
const newsController = require("../controllers/news");
router.route('/article').get(newsController.article);
router.route('/tips').get(newsController.tipList);
router.route('/latest').get(newsController.latestList);
router.route('/tips/:tipByName').get(newsController.tipByName);
router.route('/latest/:latestByName').get(newsController.latestByName);

require("../models/about");
const aboutController = require("../controllers/about");
router.route('/about').get(aboutController.aboutList);

require("../models/contact");
const contactController = require("../controllers/contact");
router.route('/contact').get(contactController.contactList);
router.route('/form').get(contactController.formList);

require("../models/main");
const homeController = require("../controllers/main");
router.route('/blogs').get(homeController.blogList);
router.route('/sidebar').get(homeController.sidebarList);
router.route('/testimonial').get(homeController.testimonial);

module.exports = router;