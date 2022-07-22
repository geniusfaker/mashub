const express = require("express");
const multer = require("multer");
const router = express.Router();
const API = require("../controllers/api");

const Storage = API.Storage;

router.get("/", API.fetchAllAgents);
router.post("/", API.createAgent);
router.patch("/:id", API.updateAgent);
router.delete("/:id", API.deleteAgent);
router.get("/:id", API.fetchAgentById);

module.exports = router;
