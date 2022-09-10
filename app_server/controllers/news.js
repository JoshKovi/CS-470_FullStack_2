/* GET homepage */
const news = (req,res)=>{
    var tips = req.app.get('tips');
    var article = req.app.get('article');
    var latest = req.app.get('latest');
    res.render('news', { title: 'Travlr Getaways', tips,article,latest });
};

module.exports = {
    news
};