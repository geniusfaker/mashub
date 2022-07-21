require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");

const app = express();

const port = process.env.PORT || 5000;

const upload = multer({ dest: "uploads" });

//MIDDLEWARE

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("uploads"));

//database connection

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log(err));

// routes prefix
app.use("/api/posts", require("./routes/routes"));

//   start server

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
