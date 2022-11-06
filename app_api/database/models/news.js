const mongoose = require('mongoose');
//Schema
const articleSchema = new mongoose.Schema({
    title:{type:String, required:true, index:true},
    image:{type:String, required:true},
    altText:{type:String, required:true},
    date:{type:Date, required:true},
    author:{type:String, required:true},
    article: {type:String, required:true}
});
const article = mongoose.model("article", articleSchema, "article");

//Schema
const latestSchema = new mongoose.Schema({
    name:{type:String, required:true, index:true},
    href:{type:String, required:true}
});
const latest = mongoose.model("latest", latestSchema, "latest");

//Schema
const tipSchema = new mongoose.Schema({
    name:{type:String, required:true, index:true},
    href:{type:String, required:true}
});
const tips = mongoose.model("tips", tipSchema);

module.exports = {
    latest,
    tips,
    article
}