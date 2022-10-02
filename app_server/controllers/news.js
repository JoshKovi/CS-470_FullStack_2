const request = require('request');
const apiOptions =  {server: 'http://localhost:3000'};

const renderNews = (req,res,article,latest,tips) =>{
    let message = null;
    let pageTitle = process.env.npm_package_description + ' - News';

    if(!(article instanceof Array)||!(latest instanceof Array)||!(tips instanceof Array)){
        message = 'API lookup error';
        responseBody = [];
    }
    else{
        if(!article.length){
            message = 'No article exist in database!';
        }
    }
    res.render('news', {
        title: pageTitle,
        latest: latest,
        article: article,
        tips:tips,
        message
    });
}

const tipList = (req,res)=>{
    const path = '/api/tips';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };

    console.info('>> newsController.tipList calling ' + requestOptions.url);

    request(
        requestOptions,
        (err, { statusCode}, body) =>{
            if(err){
                console.error(err);
            }
            latestList(req,res,body);
        }
    )
}

const latestList = (req,res, tips)=>{
    const path = '/api/latest';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };

    console.info('>> newsController.latestList calling ' + requestOptions.url);

    request(
        requestOptions,
        (err, { statusCode}, body) =>{
            if(err){
                console.error(err);
            }
            article(req,res,body, tips);
        }
    )
}
const article = (req,res,latest,tips)=>{
    const path = '/api/article';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };

    console.info('>> newsController.article calling ' + requestOptions.url);

    request(
        requestOptions,
        (err, { statusCode}, body) =>{
            if(err){
                console.error(err);
            }
            renderNews(req,res,body,latest,tips);
        }
    )
}

module.exports = {
    tipList
};