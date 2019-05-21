const router = require('express').Router();
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const User = require('../models/User');

//CRUD

//ADD NEW USER
router.post('/', (req, res) => {
  const newUser = new User(req.body);
  newRest.save(err => {
    if (err) return console.warn(err);

    res.send(newUser);
  })
});

module.exports = router;