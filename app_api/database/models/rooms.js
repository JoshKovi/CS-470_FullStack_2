const mongoose = require('mongoose');

//Schema
const roomSchema = new mongoose.Schema({
    name:{type:String, required:true, index:true},
    image:{type:String, required:true},
    description:{type:String, required:true},
    href:{type:String, required:true},
    altText:{type:String, required:true},
    rate: {type:String, required:true}
});

module.exports = mongoose.model("rooms", roomSchema);
