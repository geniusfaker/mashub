const express = require("express");
const multer = require("multer");
const router = express.Router();
const API = require("../controllers/api");

const multerStorage = multer.memoryStorage();
const Storage = API.Storage;

const upload = multer({
  storage: Storage,
}).single("image");

router.get("/", API.fetchAllPosts);
router.post("/", upload, API.createPost);
router.patch("/:id", upload, API.updatePost);
router.delete("/:id", API.deletePost);
router.get("/:id", API.fetchPostById);

module.exports = router;
