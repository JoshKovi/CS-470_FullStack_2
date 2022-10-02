const mongoose = require('mongoose');
const model = mongoose.model('about');

//Get: /trips - list all the trips
const aboutList = async(req,res)=>{
    model
    .find({}) //Empty Filter
    .exec((err,about)=>{
        if(!about){ //Location not found
            return res.status(404).json({"message": "about not found"});    
        }
        else if(err){
            return res.status(404).json(err);
        }
        else{
            return res.status(200).json(about);
        }
    });
};


module.exports = {
    aboutList
};