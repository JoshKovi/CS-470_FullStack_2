const mongoose = require('mongoose');

//Schema
const tripSchema = new mongoose.Schema({
    code:{type:String, required:true, index:true},
    name:{type:String, required:true, index:true},
    length:{type:String, required:true},
    start: {type:Date, require:true},
    resort:{type: String, required:true},
    perPerson:{type:String, required:true},
    image:{type:String, required:true},
    description:{type:String, required:true},
    href:{type:String, required:true},
    altText:{type:String, required:true}
});

//mongoose.model('trips', tripSchema);
module.exports = mongoose.model("trips", tripSchema);