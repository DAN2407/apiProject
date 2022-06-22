const DestinationModel = require('../models/destination');

exports.createDestination = async (req, res, next) => {
    try{
        let { name, description, ubication, rating, photo, reviews } = req.body;
        //validate the data
         if (!name || !description || !ubication || !rating ) {
            return res.status(400).send({
                message: "Please fill all the fields",
           });
        }else{
            let destination = new DestinationModel.create({
                name,
                description,
                ubication,
                rating,
                photo,
                reviews
            });
            let newDestination = await destination.save();
            res.send({
                message: "Destination created",
                newDestination,
            });
        }
    } catch (err) {
        next(err);
    }
};

exports.getDestination = async (req, res, next) => {
    try{
        let destination = req.params.name;
        let destinationToGet = await DestinationModel.findOne({ name: destination });
        if (!destinationToGet) {
            return res.status(404).send({
                message: "Destination not found",
            });
        
        }else{
            res.send({
                message: "Destination found",
                destinationToGet,
            });
        }
    } catch (err) {
        next(err);

    }
};

exports.deleteDestination = async (req, res, next) => {
    try{
        let destination = req.params.id;
        let { deleteCount } = await DestinationModel.deleteOne({ _id: destination });
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

        let { name, description, ubication, rating, photo, reviews } = req.body;
        let destination = await DestinationModel.findOne({ name: destinationToUpdate });
        
        if (!destination)
            return res.status(400).send({
                message: "Destination to update not found",
            });

        destination.name = name;
        destination.description = description;
        destination.ubication = ubication;
        destination.rating = rating;
        destination.photo = photo;
        destination.reviews = reviews;

        let updatedDestination = await destination.save();

        if (destination == updatedDestination) {
            return res.send({
                message: "Destination is updated",
                destination: { name, description, ubication, rating, photo, reviews},
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


