const mongoose = require('mongoose');
//Schema
const aboutSchema = new mongoose.Schema({
    title:{type:String, required:true, index:true},
    article:{type:String, required:true},
    division:{type:String, required:true},
});

module.exports = mongoose.model("about", aboutSchema, "about");