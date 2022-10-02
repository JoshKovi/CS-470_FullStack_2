const request = require('request');
const apiOptions =  {server: 'http://localhost:3000'};

const renderMain = (req,res,blogs,sideBar,testimonial) =>{
    let message = null;
    let pageTitle = process.env.npm_package_description + ' - Home';

    if(!(sideBar instanceof Array)||!(sideBar instanceof Array)){
        message = 'API lookup error';
        responseBody = [];
    }
    else{
        if(!blogs.length||!sideBar.length||!testimonial.length){
            message = 'No home exist in database!';
        }
    }
    res.render('index', {
        title: pageTitle,
        blogs: blogs,
        testimonial: testimonial,
        sidebar:sideBar,
        message
    });
}

const blogList = (req,res)=>{
    const path = '/api/blogs';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };

    console.info('>> homeController.blogList calling ' + requestOptions.url);

    request(
        requestOptions,
        (err, { statusCode}, body) =>{
            if(err){
                console.error(err);
            }
            sidebarList(req,res,body);
        }
    )
}

const sidebarList = (req,res, blogs)=>{
    const path = '/api/sideBar';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };

    console.info('>> nhomeController.sideBarList calling ' + requestOptions.url);

    request(
        requestOptions,
        (err, { statusCode}, body) =>{
            if(err){
                console.error(err);
            }
            testimonial(req,res,blogs, body);
        }
    )
}
const testimonial = (req,res,blogs,sideBar)=>{
    const path = '/api/testimonial';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };

    console.info('>> homeController.testimonial calling ' + requestOptions.url);

    request(
        requestOptions,
        (err, { statusCode}, body) =>{
            if(err){
                console.error(err);
            }
            renderMain(req,res,blogs,sideBar,body);
        }
    )
}

module.exports = {
    blogList
};