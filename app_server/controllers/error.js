/* GET homepage */
const error = (req,res)=>{
    res.render('error', { title: 'Travlr Getaways' });
};

module.exports = {
    error
};