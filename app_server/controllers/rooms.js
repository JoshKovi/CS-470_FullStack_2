const request = require('request');
const apiOptions =  {server: 'http://localhost:3000'};

const renderRoomList = (req,res,responseBody) =>{
    let message = null;
    let pageTitle = process.env.npm_package_description + ' - Rooms';

    if(!(responseBody instanceof Array)){
        message = 'API lookup error';
        responseBody = [];
    }
    else{
        if(!responseBody.length){
            message = 'No rooms exist in database!';
        }
    }

    res.render('rooms', {
        title: pageTitle,
        rooms: responseBody,
        message
    });
}

const roomList = (req,res)=>{
    const path = '/api/rooms';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };

    console.info('>> roomController.roomList calling ' + requestOptions.url);

    request(
        requestOptions,
        (err, { statusCode}, body) =>{
            if(err){
                console.error(err);
            }
            renderRoomList(req,res,body);
        }
    )
}

module.exports = {
    roomList
};