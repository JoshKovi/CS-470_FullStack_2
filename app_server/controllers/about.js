const request = require('request');
const apiOptions =  {server: 'http://localhost:3000'};

const renderMealList = (req,res,responseBody) =>{
    let message = null;
    let pageTitle = process.env.npm_package_description + ' - About';

    if(!(responseBody instanceof Array)){
        message = 'API lookup error';
        responseBody = [];
    }
    else{
        if(!responseBody.length){
            message = 'No about info exist in database!';
        }
    }

    res.render('about', {
        title: pageTitle,
        about: responseBody,
        message
    });
}

const aboutList = (req,res)=>{
    const path = '/api/about';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };

    console.info('>> aboutController.aboutList calling ' + requestOptions.url);

    request(
        requestOptions,
        (err, { statusCode}, body) =>{
            if(err){
                console.error(err);
            }
            renderMealList(req,res,body);
        }
    )
}

module.exports = {
    aboutList
};