const UserModel = require('../models/user');

exports.updateUser = async (req, res, next) => {
    try {

      let usernameToUpdate = req.params.username;

      let { username, name, email } = req.body; 
      let user = await UserModel.findOne({ username: usernameToUpdate });
  
      if (!user)
        return res.status(400).send({
          message: "User to update not found",
        });
  
      user.username = username;
      user.name = name;
      user.email = email;
    
  
      let updatedUser = await user.save();
  
      if (user == updatedUser) {
        return res.send({
          message: "User is updated",
          user: { username, name, email: user.email},
        });
      }
      res.send({
        message: "cannot update the user",
      });
    } catch (err) {
      next(err);
    }
};

exports.deleteUser = async (req, res, next) => {
    try {
      let username = req.params.username;
      let { deletedCount } = await UserModel.deleteOne({ username });
      if (deletedCount == 1) {
        return res.send({
          message: "successfully deleted",
        });
      }
      return res.status(400).send({
        message: "cannot delete the user, maybe is delete before",
      });
    } catch (err) {
      next(err);
    }
};

exports.getUser = async (req, res, next) => {
    try {
      let username = req.params.username;
      let user = await UserModel.findOne({ username }, "-password");
      if (!user) {
        return res.status(404).send({
          message: "user not found",
        });
      }
      res.send({ user });
    } catch (err) {
      next(err);
    }
};

exports.getAllUsers = async (req, res, next) => {
    try {
      let users = await UserModel.find({}, "-password");
      res.send({ users });
    } catch (err) {
      next(err);
    }
}

exports.createUser = async (req, res, next) => {
    try {
        let { username, name, email, password, image, role } = req.body;
        //Validation
        if (!username || !name || !email || !password || !role ) {
            return res.status(400).send({message: "Please fill all the fields"         });
        }else{
            let newUser = await UserModel.create({
                username,
                name,
                email,
                password,
                image,
                role
            });
            res.send({newUser});
        }
    } catch (err) {
        next(err);
    }
};

