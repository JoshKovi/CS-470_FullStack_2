const mongoose = require('mongoose');
const Trip = mongoose.model('trips');
const User = mongoose.model('users')

//Get: /trips - list all the trips
const tripsList = async(req,res)=>{
    Trip
    .find({}) //Empty Filter
    .exec((err,trips)=>{
        if(!trips){ //Location not found
            return res.status(404).json({"message": "trip not found"});    
        }
        else if(err){
            return res.status(404).json(err);
        }
        else{
            return res.status(200).json(trips);
        }
    });
};

//Get: /trips/:tripCode - return single trip
const tripsFindCode = async(req,res)=>{
    Trip
    .find({'code':req.params.tripCode}) //Empty Filter
    .exec((err,trips)=>{
        if(!trips){ //Location not found
            return res.status(404).json({"message": "trip not found"});    
        }
        else if(err){
            return res.status(404).json(err);
        }
        else{
            return res.status(200).json(trips);
        }
    });
};

const tripsAddTrip = async(req, res) =>{
    //console.log('tripsAddTrip invoked with: \n' + req.body);
    getUser(req, res, (req,res)=>{
    Trip
        .create({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description,
            href: req.body.href,
            altText: req.body.altText
        },
        (err, trip) =>{
            if(err){
                return res
                    .status(400) //bad request
                    .json(err);
            }
            else{
                return res
                    .status(201) //created
                    .json(trip);
            }
        });
    });
}
const tripsUpdateTrip = async(req,res)=>{
    console.log('tripsUpdateTrip invoked with: \n' + req.body);
    getUser(req, res, (req,res)=>{
    Trip
        .findOneAndUpdate({'code': req.params.tripCode},{
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description,
            href: req.body.href,
            altText: req.body.altText
        }, {new:true})
        .then(trip=>{
            if(!trip){
                return res.status(404).send({
                    message: "Trip not found with code " + req.params.tripCode
                });
            }
            res.send(trip);
        }).catch(err => {
            if(err.kind === 'ObjectId'){
                return res
                    .status(404) 
                    .send({
                        message: "Trip not found with code " + req.params.tripCode
                    });
            }
            return res
                    .status(500) //Server error
                    .json(err);
        });
    });
}
const tripsDeleteTrip = async(req,res)=>{
    console.log("Hello: " + req.params.tripCode);
    console.log('tripsDeleteTrip invoked with: \n' + req.body);
    getUser(req, res, (req,res)=>{
    Trip
        .deleteOne({code: req.params.tripCode})
        .then(data=>{
            if(data.deletedCount == 1){
                res.send(true);
            }
            else{
                res.send(false);
            }
        })
    });
}

const getUser = (req, res, callback) =>{
    if(req.auth && req.auth.email){
        User.findOne({email: req.auth.email})
        .exec((err, user)=>{
            if(!user){
                return res.status(404).json({"message": "User not found"});
            }
            else if(err){
                return res.status(404).json(err);
            }
            callback(req, res, user.name);
        })
    }
    else{
        return res.status(404).json({"message": "User not found"});
    }
}



module.exports = {
    tripsList,
    tripsFindCode,
    tripsAddTrip,
    tripsUpdateTrip,
    tripsDeleteTrip
};