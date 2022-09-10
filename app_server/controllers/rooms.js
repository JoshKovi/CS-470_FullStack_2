/* GET homepage */
const rooms = (req,res)=>{
    var rooms = req.app.get('rooms');
    res.render('rooms', { title: 'Travlr Getaways',rooms });
};

module.exports = {
    rooms
};