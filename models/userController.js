const User = require('./User');

const userController = {};

// userController.saveUser = (req, res, next) => {
//   User.create({ user: req.body.user }, (err, response) => {
//     if (err) throw err;
//     res.send(response);
//   });
// };

// userController.findUsers = (req, res, next) => {
//   User.find({}, (err, user) => {
//     if (err) throw err;
//     res.send(user);
//   });
// };

userController.saveAndFind = async (req, res, next) => {
  await User.create({ user: req.body.user });
  await User.find({}, (err, user) => {
    if (err) throw err;
    res.send(user);
  });
};

module.exports = userController;
