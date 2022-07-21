const Post = require("../models/agents");
const multer = require("multer");
const fs = require("fs");
const multerStorage = multer.memoryStorage();

let Storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },

  filename: function (req, file, cb) {
    cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  },
});

module.exports = class API {
  // fetch all posts

  static async fetchAllAgents(req, res) {
    try {
      const agents = await Agent.find();
      res.status(200).json(posts);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  // fetch post by id

  static async fetchAgentById(req, res) {
    const id = req.params.id;
    try {
      const post = await Post.findById(id);
      res.status(200).json(post);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  // create post

  static async createAgent(req, res) {
    console.log(req.file);
    const post = await req.body;
    let imageName = req.file.filename;
    post.image = imageName;
    try {
      await Post.create(post);
      res.status(201).json({ message: "post created successfully" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  // delete post

  static async deleteAgent(req, res) {
    const id = req.params.id;
    try {
      const result = await Post.findByIdAndDelete(id);
      if (result.image != "") {
        try {
          fs.unlinkSync("./uploads/" + result.image);
        } catch (err) {
          console.log(err);
        }
      }
      res.status(200).json({ message: "post delete success" });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  // update post

  static async updateAgent(req, res) {
    const id = req.params.id;
    let new_image = "";
    if (req.file) {
      new_image = req.file.filename;
      try {
        fs.unlinkSync("./uploads/" + req.body.old_image);
      } catch (err) {
        console.log(err);
      }
    } else {
      new_image = req.body.old_image;
    }
    const newPost = req.body;
    newPost.image = new_image;
    try {
      await Post.findByIdAndUpdate(id, newPost);
      res.status(200).json({ message: "post update success" });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
};
