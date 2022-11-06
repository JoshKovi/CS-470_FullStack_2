const mongoose = require('mongoose');
//Schema
const contactSchema = new mongoose.Schema({
    name:{type:String, required:true, index:true},
    description:{type:String, required:true}
});

const contact = mongoose.model("contact", contactSchema, "contact");

//Schema
const formSchema = new mongoose.Schema({
    fieldName:{type:String, required:true, index:true},
    inputValue:{type:String, required:true}
});

const form = mongoose.model("form", formSchema, "form");

module.exports ={
    contact,
    form
}