require("dotenv").config();

const express = require("express");
const router = require("./routes")
const mongoose = require("mongoose");
//express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);


  const origin = req.headers.origin;
  console.log(origin);
  const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:4000"
  ];
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }

  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

//app route handler
app.use(router);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log(
        "Connected to MongoDB and listening on port",
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
