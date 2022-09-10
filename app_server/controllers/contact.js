/* GET homepage */
const contact = (req,res)=>{
    var contact = req.app.get('contact');
    var form = req.app.get('form');
    res.render('contact', { title: 'Travlr Getaways', contact, form });
};

module.exports = {
    contact
};