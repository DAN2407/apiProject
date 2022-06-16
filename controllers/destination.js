import Destination from '../models/destination';

export const createDestination = async (req, res, next) => {
    const newDestination = new Destination(req.body);
    try{
        const savedDestination = await newDestination.save();
        res.status(200).json(savedDestination);
    }catch (error) {
        next(error);
    }
}

export const getDestinations = async (req, res, next) => {
    try{
        const destinations = await Destination.find();
        res.status(200).json(destinations);
    }catch (error) {
        next(error);
    }
}

export const deleteDestination = async (req, res, next) => {
    try{
        const deletedDestination = await Destination.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedDestination);
    }catch (error) {
        next(error);
    }
}

export const getAllDestinations = async (req, res, next) => {
    try{
        const destinations = await Destination.find();
        res.status(200).json(destinations);
    }catch (error) {
        next(error);
    }
}

export const updateDestination = async (req, res, next) => {
    try{
        const updatedDestination = await Destination.findByIdAndUpdate(
            req.params.id, 
            {$set: req.body}, 
            { new: true }
        );
        res.status(200).json(updatedDestination);
    } catch (error) {
        next(error);
    }
} 
