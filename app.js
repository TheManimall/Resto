const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const restaurantRouter = require('./routes/Restaurant');
const dishRouter = require('./routes/Dish');
const userRouter = require('./routes/User');


const port = process.env.PORT || 5050;
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/restaurant', restaurantRouter);
app.use('/api/dish', dishRouter);
app.use('/api/user', userRouter);

app.listen(port, (err) => {
  if (err) return console.warn(err);

  return true;
});

//connect cloud DB
const connectionString = 'mongodb+srv://admin:admin@themanimal-uqyyz.mongodb.net/test?retryWrites=true';
mongoose.connect(connectionString);
