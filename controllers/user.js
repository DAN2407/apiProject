const UserModel = require('../models/user');

exports.updateUser = async (req, res, next) => {
    try{
        const updateUser = await User.findByIdAndUpdate(
            req.params.id, 
            {$set: req.body}, 
            { new: true }
        );

        res.status(200).json(updateUser);
    } catch (error) {
        next(error);
    }
}

exports.deleteUser = async (req, res, next) => {
    try{
        const deleteUser = await User.findByIdAndDelete(req.params.id);

        res.status(200).json("User has been deleted");
    } catch (error) {
        next(error);
    }
}

exports.getUser = async (req, res, next) => {
    try{
        const user = await User.findById(req.params.id);

        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

exports.getAllUsers = async (req, res, next) => {
    try{
        const users = await User.find();

        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

exports.createUser = async (req, res, next) => {
    const newUser = new User(req.body);
    try{
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    }catch (error) {
        next(error);
    }
}
