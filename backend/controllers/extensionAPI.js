const Extension = require("../models/extensions");
// const multer = require("multer");
// const multerStorage = multer.memoryStorage();

// let Storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads");
//   },

//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
//   },
// });

module.exports = class Extension_API {
  // fetch all Extensions

  static async fetchAllExtensions(req, res) {
    try {
      const extensions = await Extension.find();
      res.status(200).json(extensions);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  // fetch extension by id

  static async fetchExtensionById(req, res) {
    const id = req.params.id;
    try {
      const extension = await Extension.findById(id);
      res.status(200).json(extension);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  // create extension

  static async createExtension(req, res) {
    console.log(req.file);
    const extension = await req.body;
    try {
      await Extension.create(extension);
      res.status(201).json({ message: "extension created successfully" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  // delete extension

  static async deleteExtension(req, res) {
    const id = req.params.id;
    try {
      const res = await Extension.findByIdAndDelete(id);

      res.status(200).json({ message: "extension delete success" });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  // update extension

  static async updateExtension(req, res) {
    const id = req.params.id;
    const newPost = req.body;
    try {
      await Extension.findByIdAndUpdate(id, newPost);
      res.status(200).json({ message: "extension update success" });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
};
