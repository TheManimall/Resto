const router = require('express').Router();
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const Restaurant = require('../models/Restaurant');

//CRUD

//ADD NEW RESTAURANT
router.post('/', (req, res) => {
  const newRest = new Restaurant(req.body);
  newRest.save(err => {
    if (err) return console.warn(err);

    res.send(newRest);
  })
});

module.exports = router;