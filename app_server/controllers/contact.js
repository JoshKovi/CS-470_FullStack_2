const request = require('request');
const apiOptions =  {server: 'http://localhost:3000'};

const renderContactList = (req,res,contact,form) =>{
    let message = null;
    let pageTitle = process.env.npm_package_description + ' - Contact';

    if(!(contact instanceof Array)||!(form instanceof Array)){
        message = 'API lookup error';
        responseBody = [];
    }
    else{
        if(!contact.length||!form.length){
            message = 'No contact info exist in database!';
        }
    }

    res.render('contact', {
        title: pageTitle,
        form: form,
        contact:contact,
        message
    });
}

const contactList = (req,res)=>{
    const path = '/api/contact';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };

    console.info('>> contactController.contactList calling ' + requestOptions.url);

    request(
        requestOptions,
        (err, { statusCode}, body) =>{
            if(err){
                console.error(err);
            }
            formList(req,res,body);
        }
    )
}
const formList = (req,res,contact)=>{
    const path = '/api/form';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };

    console.info('>> contactController.formList calling ' + requestOptions.url);

    request(
        requestOptions,
        (err, { statusCode}, body) =>{
            if(err){
                console.error(err);
            }
            renderContactList(req,res,contact,body);
        }
    )
}

module.exports = {
    contactList
};