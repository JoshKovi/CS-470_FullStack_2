const mongoose = require('mongoose');
const contactModel = mongoose.model('contact');
const formModel = mongoose.model('form');

//Get: /trips - list all the trips
const contactList = async(req,res)=>{
    contactModel
    .find({}) //Empty Filter
    .exec((err,contact)=>{
        if(!contact){ //Location not found
            return res.status(404).json({"message": "contact info not found"});    
        }
        else if(err){
            return res.status(404).json(err);
        }
        else{
            return res.status(200).json(contact);
        }
    });
};

//Get: /trips - list all the trips
const formList = async(req,res)=>{
    formModel
    .find({}) //Empty Filter
    .exec((err,form)=>{
        if(!form){ //Location not found
            return res.status(404).json({"message": "form info not found"});    
        }
        else if(err){
            return res.status(404).json(err);
        }
        else{
            return res.status(200).json(form);
        }
    });
};


module.exports = {
    contactList,
    formList
};