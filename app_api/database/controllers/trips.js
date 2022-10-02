const mongoose = require('mongoose');
const model = mongoose.model('trips');

//Get: /trips - list all the trips
const tripsList = async(req,res)=>{
    model
    .find({}) //Empty Filter
    .exec((err,trips)=>{
        if(!trips){ //Location not found
            return res.status(404).json({"message": "trip not found"});    
        }
        else if(err){
            return res.status(404).json(err);
        }
        else{
            return res.status(200).json(trips);
        }
    });
};

//Get: /trips/:tripCode - return single trip
const tripsFindCode = async(req,res)=>{
    model
    .find({'code':req.params.tripCode}) //Empty Filter
    .exec((err,trips)=>{
        if(!trips){ //Location not found
            return res.status(404).json({"message": "trip not found"});    
        }
        else if(err){
            return res.status(404).json(err);
        }
        else{
            return res.status(200).json(trips);
        }
    });
};


module.exports = {
    tripsList,
    tripsFindCode
};