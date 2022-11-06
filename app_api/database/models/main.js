const mongoose = require('mongoose');
//Schema
const blogSchema = new mongoose.Schema({
    name:{type:String, required:true, index:true},
    href:{type:String, required:true},
    date:{type:Date, required:true},
    description:{type:String, required:true}
});
const blog = mongoose.model("blogs", blogSchema, "blogs");

//Schema
const sidebarSchema = new mongoose.Schema({
    href:{type:String, required:true, index:true},
    image:{type:String, required:true,index:true},
    altText:{type:String, required:true}
});
const sidebar = mongoose.model("sidebar", sidebarSchema, "sidebar");

//Schema
const testimonialSchema = new mongoose.Schema({
    signature:{type:String, required:true, index:true},
    href:{type:String, required:true},
    description:{type:String, required:true}
});
const testimonial = mongoose.model("testimonial", testimonialSchema, "testimonial");

module.exports = {
    blog,
    sidebar,
    testimonial
}