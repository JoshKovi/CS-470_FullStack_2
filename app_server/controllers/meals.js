/* GET homepage */
const meals = (req,res)=>{
    var meals = req.app.get('meals')
    res.render('meals', { title: 'Travlr Getaways', meals });
};

module.exports = {
    meals
};