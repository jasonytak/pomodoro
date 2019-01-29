const User = require('./User');

const userController = {};

userController.saveUser = (req, res, next) => {
  User.create({ user: req.body.user }, (err, response) => {
    if (err) throw err;
    console.log(response);
    res.send(response);
  });
};

module.exports = userController;
