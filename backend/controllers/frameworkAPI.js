const Framework = require("../models/frameworks");
const multer = require("multer");
const fs = require("fs");
// const multerStorage = multer.memoryStorage();

// let Storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads");
//   },

//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
//   },
// });

module.exports = class Framework_API {
  // fetch all Frameworks

  static async fetchAllFrameworks(req, res) {
    try {
      const frameworks = await Framework.find();
      res.status(200).json(frameworks);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  // fetch framework by id

  static async fetchFrameworkById(req, res) {
    const id = req.params.id;
    try {
      const framework = await Framework.findById(id);
      res.status(200).json(framework);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  // create framework

  static async createFramework(req, res) {
    console.log(req.file);
    const framework = await req.body;
    try {
      await Framework.create(framework);
      res.status(201).json({ message: "framework created successfully" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  // delete framework

  static async deleteFramework(req, res) {
    const id = req.params.id;
    try {
      const res = await Framework.findByIdAndDelete(id);

      res.status(200).json({ message: "framework delete success" });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  // update framework

  static async updateFramework(req, res) {
    const id = req.params.id;
    const newPost = req.body;
    try {
      await Framework.findByIdAndUpdate(id, newPost);
      res.status(200).json({ message: "framework update success" });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
};
