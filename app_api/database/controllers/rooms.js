const mongoose = require('mongoose');
const model = mongoose.model('rooms');

//Get: /trips - list all the trips
const roomList = async(req,res)=>{
    model
    .find({}) //Empty Filter
    .exec((err,rooms)=>{
        if(!rooms){ //Location not found
            return res.status(404).json({"message": "room not found"});    
        }
        else if(err){
            return res.status(404).json(err);
        }
        else{
            return res.status(200).json(rooms);
        }
    });
};

//Get: /trips/:tripCode - return single trip
const roomByName = async(req,res)=>{
    model
    .find({'name': req.params.roomByName }) //name Filter
    .exec((err,rooms)=>{
        if(!rooms){ //Location not found
            return res.status(404).json({"message": "room not found"});    
        }
        else if(err){
            return res.status(404).json(err);
        }
        else{
            return res.status(200).json(rooms);
        }
    });
};


module.exports = {
    roomList,
    roomByName
};