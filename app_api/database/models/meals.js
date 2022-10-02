const mongoose = require('mongoose');

//Schema
const mealSchema = new mongoose.Schema({
    name:{type:String, required:true, index:true},
    image:{type:String, required:true},
    description:{type:String, required:true},
    href:{type:String, required:true},
    altText:{type:String, required:true},
    subName: {type:String, required:true}
});

module.exports = mongoose.model("meals", mealSchema);