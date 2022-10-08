const mongoose = require('mongoose');
const model = mongoose.model('trips');

//Get: /trips - list all the trips
const tripsList = async(req,res)=>{
    model
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
    model
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
    model
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
}
const tripsUpdateTrip = async(req,res)=>{
    console.log(req.body);
    model
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
}
const tripsDeleteTrip = async(req,res)=>{
    console.log("Hello: " + req.params.tripCode);
    model.deleteOne({code: req.params.tripCode})
    .then(data=>{
        if(data.deletedCount == 1){
            res.send(true);
        }
        else{
            res.send(false);
        }
    })

}



module.exports = {
    tripsList,
    tripsFindCode,
    tripsAddTrip,
    tripsUpdateTrip,
    tripsDeleteTrip
};