// Call in installed dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("morgan");
require("dotenv").config();
const blogRoutes = require("./server/routes/blog");
const userRoutes = require("./server/routes/user");
const productRoutes = require("./server/routes/product");
const orderRoutes = require("./server/routes/orders");
const brandRoutes = require("./server/routes/brands");
const bannerRoutes = require("./server/routes/banners");
// Connect MongoDB
// const { MongoClient, ServerApiVersion } = require('mongodb');
const username = encodeURIComponent("tabao081000");
const password = encodeURIComponent("08102000");
const db_name = encodeURIComponent("shop_hope");
let url_db = `mongodb+srv://${username}:${password}@cluster0.oqdhz.mongodb.net/${db_name}?retryWrites=true&w=majority`;
// const client = new MongoClient(url_db, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// set up express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));

// set up mongoose
mongoose.connect(url_db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connection successful');
  })
  .catch((err) => {
    console.error('Database connection error', err)
  })

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("shop_hope").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);

//Enabling CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept, x-client-key, x-client-token, x-client-secret, Authorization"
  );
  next();
});

app.use("/api/", blogRoutes);
app.use("/api/", userRoutes);
app.use("/api/", productRoutes);
app.use("/api/", orderRoutes);
app.use("/api/", brandRoutes);
app.use("/api/", bannerRoutes);

// set up port number
const port = process.env.PORT || 5035;

// set up home route
app.get("/", (request, respond) => {
  respond.status(200).json({
    message: "Welcome to Project Support",
  });
});
app.listen(port, () => {
  console.log(`Our server is live on ${port}. Yay!`);
});
