const destinationModel = require('../models/destination');

exports.createDestination = async (req, res, next) => {
    try{
        let { name, description, ubication, rating, photo, reviews } = req.body;
        let newDestination = await destinationModel.create({
            name, 
            description, 
            ubication, 
            rating, 
            photo, 
            reviews
        });
        res.send({newDestination});
    } catch (err) {
        next(err);
    }
}

exports.getDestination = async (req, res, next) => {
    try{
        let name = req.params.name;
        let destination = await destinationModel.findOne({name});
        if(!destination){
            return res.status(404).send({
                message: "Destination not found"
            });
        }
        res.send({destination});
    } catch (err) {
        next(err);
    }
}

exports.deleteDestination = async (req, res, next) => {
    try{
        let destination = req.params.id;
        let { deleteCount } = await Destination.deleteOne({ _id: destination });
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
}

exports.updateDestination = async (req, res, next) => {
    try{
        let destinationToUpdate = req.params.name;

        let { name, description, ubication, rating, photo, reviews } = req.body;
        let destination = await destinationModel.findOne({ name: destinationToUpdate });
        
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

} 


