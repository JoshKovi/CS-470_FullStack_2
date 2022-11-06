const mongoose = require('mongoose');
const tipModel = mongoose.model('tips');
const latestModel = mongoose.model('latest');
const articleModel = mongoose.model('article');


//Get: /trips - list all the trips
const tipList = async(req,res)=>{
    tipModel
    .find({}) //Empty Filter
    .exec((err,tips)=>{
        if(!tips){ //Location not found
            return res.status(404).json({"message": "tips not found"});    
        }
        else if(err){
            return res.status(404).json(err);
        }
        else{
            return res.status(200).json(tips);
        }
    });
};

//Get: /trips/:tripCode - return single trip
const tipByName = async(req,res)=>{
    tipModel
    .find({'name': req.params.tipByName }) //name Filter
    .exec((err,tips)=>{
        if(!rooms){ //Location not found
            return res.status(404).json({"message": "tip not found"});    
        }
        else if(err){
            return res.status(404).json(err);
        }
        else{
            return res.status(200).json(tips);
        }
    });
};

//Get: /trips - list all the trips
const latestList = async(req,res)=>{
    latestModel
    .find({}) //Empty Filter
    .exec((err,latest)=>{
        if(!latest){ //Location not found
            return res.status(404).json({"message": "Latest list not found"});    
        }
        else if(err){
            return res.status(404).json(err);
        }
        else{
            return res.status(200).json(latest);
        }
    });
};

//Get: /trips/:tripCode - return single trip
const latestByName = async(req,res)=>{
    latestModel
    .find({'name': req.params.latestByName }) //name Filter
    .exec((err,latest)=>{
        if(!latest){ //Location not found
            return res.status(404).json({"message": "Latest not found"});    
        }
        else if(err){
            return res.status(404).json(err);
        }
        else{
            return res.status(200).json(latest);
        }
    });
};

//Get: /trips/:tripCode - return single trip
const article= async(req,res)=>{
    articleModel
    .findOne({}) //name Filter
    .exec((err,article)=>{
        if(!article){ //Location not found
            return res.status(404).json({"message": "Article not found"});    
        }
        else if(err){
            return res.status(404).json(err);
        }
        else{
            return res.status(200).json(article);
        }
    });
};


module.exports = {
    article,
    tipList,
    tipByName,
    latestList,
    latestByName
};