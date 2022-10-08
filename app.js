const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hbs = require('hbs');

require('./app_api/database/db');



const indexRouter = require('./app_server/routes/index');
const usersRouter = require('./app_server/routes/users');
const travelRouter = require('./app_server/routes/travel');
const aboutRouter = require('./app_server/routes/about');
const contactRouter = require('./app_server/routes/contact');
const errorRouter = require('./app_server/routes/error');
const mealsRouter = require('./app_server/routes/meals');
const newsRouter = require('./app_server/routes/news');
const roomsRouter = require('./app_server/routes/rooms');

const apiRouter = require('./app_api/database/routes/index');



const app = express();

//Moved the JSON loads into app to only load from file once and hold in memory rather than 
//access file each time page is navigated to (in accordance with best practice mentioned in video)
var fs = require('fs');

//Puts JSON objects into app for later reference
//Travel
//app.set('trips', JSON.parse(fs.readFileSync('./data/trips.json', 'utf-8')));


//Main
app.set('blogs', JSON.parse(fs.readFileSync('./data/blogs.json', 'utf-8')));
app.set('testimonial', JSON.parse(fs.readFileSync('./data/testimonial.json', 'utf-8')));
app.set('sidebar', JSON.parse(fs.readFileSync('./data/sidebar.json', 'utf-8')));

//Rooms
// app.set('rooms', JSON.parse(fs.readFileSync('./data/rooms.json', 'utf-8')));

//Meals
// app.set('meals', JSON.parse(fs.readFileSync('./data/meals.json', 'utf-8')));

//News
// app.set('tips', JSON.parse(fs.readFileSync('./data/tips.json', 'utf-8')));
// app.set('latest', JSON.parse(fs.readFileSync('./data/latest.json', 'utf-8')));
// app.set('article', JSON.parse(fs.readFileSync('./data/article.json', 'utf-8')));

//About
// app.set('about', JSON.parse(fs.readFileSync('./data/about.json', 'utf-8')));

//Contact
app.set('contact', JSON.parse(fs.readFileSync('./data/contact.json', 'utf-8')));
app.set('form', JSON.parse(fs.readFileSync('./data/form.json', 'utf-8')));

// view engine setup
app.set('views', path.join(__dirname, 'app_server','views'));

//Register handlebars partials (http://www.npmjs.com/package/hbs)
hbs.registerPartials(path.join(__dirname, 'app_server', 'views/partials'));

app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// allow CORS
app.use("/api", (req,res,next)=>{
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/travel', travelRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/error', errorRouter);
app.use('/meals', mealsRouter);
app.use('/news', newsRouter);
app.use('/rooms', roomsRouter);

app.use('/api', apiRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
