const mongoose = require('mongoose');
const blogModel = mongoose.model('blogs');
const sideModel = mongoose.model('sidebar');
const testModel = mongoose.model('testimonial');


//Get: /trips - list all the trips
const blogList = async(req,res)=>{
    blogModel
    .find({}) //Empty Filter
    .exec((err,blogs)=>{
        if(!blogs){ //Location not found
            return res.status(404).json({"message": "blog not found"});    
        }
        else if(err){
            return res.status(404).json(err);
        }
        else{
            return res.status(200).json(blogs);
        }
    });
};


//Get: /trips - list all the trips
const sidebarList = async(req,res)=>{
    sideModel
    .find({}) //Empty Filter
    .exec((err,sideBar)=>{
        if(!sideBar){ //Location not found
            return res.status(404).json({"message": "sideBar not found"});    
        }
        else if(err){
            return res.status(404).json(err);
        }
        else{
            return res.status(200).json(sideBar);
        }
    });
};


//Get: /trips/:tripCode - return single trip
const testimonial= async(req,res)=>{
    testModel
    .findOne({}) //name Filter
    .exec((err,test)=>{
        if(!test){ //Location not found
            return res.status(404).json({"message": "testimonial not found"});    
        }
        else if(err){
            return res.status(404).json(err);
        }
        else{
            return res.status(200).json(test);
        }
    });
};


module.exports = {
    blogList,
    sidebarList,
    testimonial
};