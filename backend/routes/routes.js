const express = require("express");
const multer = require("multer");
const router = express.Router();
const API = require("../controllers/api");

const multerStorage = multer.memoryStorage();
const Storage = API.Storage;

const upload = multer({
  storage: Storage,
}).single("image");

router.get("/", API.fetchAllAgents);
router.post("/", upload, API.createAgent);
router.patch("/:id", upload, API.updateAgent);
router.delete("/:id", API.deleteAgent);
router.get("/:id", API.fetchAgentById);

module.exports = router;
