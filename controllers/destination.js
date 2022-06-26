const DestinationModel = require('../models/destination');

exports.createDestination = async (req, res, next) => {
    try{
        let { name, description, ubication, photo, rating, category } = req.body;
        //validate the data
         if (!name || !description || !ubication ) {
            return res.status(400).send({
                message: "Please fill all the fields",
           });
        }else{
            let newDestination = new DestinationModel.create({
                name,
                description,
                ubication,
                rating,
                photo,
                category
            });
            res.send({ newDestination});
        }
    } catch (err) {
        next(err);
    }
};

exports.getAllDestinations = async (req, res, next) => {
    try{
        let destinations = await DestinationModel.find({});
        res.send({ destinations });
    } catch (err) {
        next(err);
    }
}

exports.getDestination = async (req, res, next) => {
    try{
        let name = req.params.name;
        let destinationToGet = await DestinationModel.findOne({ name });
        if (!destinationToGet) {
            return res.status(404).send({
                message: "destination not found",
              });
        }
        res.send({data: destinationToGet });
    } catch (err) {
        next(err);
    }
    
};

exports.deleteDestination = async (req, res, next) => {
    try{
        let destination = req.params.id;
        let { deleteCount } = await DestinationModel.deleteOne({ destination });
        if (deleteCount == 1) {
            return res.send({
                message: "Destination deleted",
            });
        }
        return res.status(404).send({
            message: "Destination not found",
        });
    } catch (error) {
        next(error);

    }
};

exports.updateDestination = async (req, res, next) => {
    try{
        let destinationToUpdate = req.params.name;

        let { name, description, ubication, rating, photo, category } = req.body;
        let destination = await DestinationModel.findOne({ name: destinationToUpdate });
        
        if (!destination)
            return res.status(400).send({
                message: "Destination to update not found",
            });

        destination.name = name;
        destination.description = description;
        destination.ubication = ubication;
        destination.photo = photo;
        destination.rating = rating;
        destination.category = category;


        let updatedDestination = await destination.save();

        if (destination == updatedDestination) {
            return res.send({
                message: "Destination is updated",
                destination: { name, description, ubication, photo},
            });
    }
        res.send({
            message: "cannot update the destination",
        });
    }
    catch (err) {
        next(err);
    }

} ;


