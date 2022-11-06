const mongoose = require('mongoose');
const model = mongoose.model('meals');

//Get: /trips - list all the trips
const mealList = async(req,res)=>{
    model
    .find({}) //Empty Filter
    .exec((err,meals)=>{
        if(!meals){ //Location not found
            return res.status(404).json({"message": "meal not found"});    
        }
        else if(err){
            return res.status(404).json(err);
        }
        else{
            return res.status(200).json(meals);
        }
    });
};

//Get: /trips/:tripCode - return single trip
const mealByName = async(req,res)=>{
    model
    .find({'name': req.params.mealByName}) //name Filter
    .exec((err,meals)=>{
        if(!meals){ //Location not found
            return res.status(404).json({"message": "meal not found"});    
        }
        else if(err){
            return res.status(404).json(err);
        }
        else{
            return res.status(200).json(meals);
        }
    });
};


module.exports = {
    mealList,
    mealByName
};