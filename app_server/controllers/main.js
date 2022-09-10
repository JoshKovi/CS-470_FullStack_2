/* GET homepage */
const index = (req,res)=>{
    //Grab the related JSON objects
    var blogs = req.app.get('blogs');
    var testimonial = req.app.get('testimonial');
    var sidebar = req.app.get('sidebar');
    res.render('index', { title: 'Travlr Getaways', blogs, testimonial, sidebar});
};

module.exports = {
    index
};