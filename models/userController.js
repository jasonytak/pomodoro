const User = require('./User.js');

const userController = {};

userController.saveUser = (req, res, next) => {
  User.create({ user: req.body.user }, (err, response) => {
    if (err) throw err;
    res.send(response);
  });
};

module.exports = userController;
