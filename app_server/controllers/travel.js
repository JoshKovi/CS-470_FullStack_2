/* GET travel view */
const travel = (req,res)=>{
    var trips = req.app.get('trips');
    res.render('travel', { title: 'Travlr Getaways', trips});
};

module.exports = {
    travel
};