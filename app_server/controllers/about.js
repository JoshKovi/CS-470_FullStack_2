/* GET homepage */
const about = (req,res)=>{
    var about = req.app.get('about');
    res.render('about', { title: 'Travlr Getaways',about });
};

module.exports = {
    about
};