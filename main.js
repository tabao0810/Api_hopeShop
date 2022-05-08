// Call in installed dependencies
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("morgan");
require('dotenv').config();
const blogRoutes = require('./server/routes/blog');
const userRoutes = require('./server/routes/user');
const productRoutes = require('./server/routes/product');
const orderRoutes = require('./server/routes/orders');
const brandRoutes = require('./server/routes/brands');
const bannerRoutes = require('./server/routes/banners');


// set up express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));


// set up mongoose
mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> {
    console.log('Database connected');
  })
  .catch((error)=> {
    console.log('Error connecting to database');
  });

   app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
    });
app.use('/api/', blogRoutes);
app.use('/api/', userRoutes);
app.use('/api/',productRoutes);
app.use('/api/',orderRoutes);
app.use('/api/',brandRoutes);
app.use('/api/',bannerRoutes);




// set up port number
const port = process.env.PORT || 5035;

// set up home route
app.get('/', (request, respond) => {
  respond.status(200).json({
    message: 'Welcome to Project Support',
  });
});
app.listen(port, () => {
  console.log(`Our server is live on ${port}. Yay!`);
});
