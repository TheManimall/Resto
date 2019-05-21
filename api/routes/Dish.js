const router = require('express').Router();
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const Dish = require('../models/Dish');

//CRUD

//ADD NEW DISH
router.post('/', (req, res) => {
  const newDish = new Dish(req.body);
  newRest.save(err => {
    if (err) return console.warn(err);

    res.send(newDish);
  })
});

module.exports = router;