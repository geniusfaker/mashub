require("dotenv").config();
const express = require("express"),
  serveStatic = require("serve-static"),
  mongoose = require("mongoose"),
  cors = require("cors"),
  port = process.env.PORT || 5000;
const app = express();
//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("uploads"));
app.use(serveStatic(__dirname + "../frontend/dist/spa"));
//database connection
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "mashubDB",
  })
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log(err));
// routes prefix
app.use("", require("./routes/routes"));
//   start server
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}/`)
);
//multer = require("multer");

// const upload = multer({ dest: "uploads" });
