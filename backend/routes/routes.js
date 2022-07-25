const express = require("express");
const multer = require("multer");
const router = express.Router();
const agentAPI = require("../controllers/agentAPI");
const extensionAPI = require("../controllers/extensionAPI");
const frameworkAPI = require("../controllers/frameworkAPI");

const Storage = API.Storage;

//agents
router.get("/", agentAPI.fetchAllAgents);
router.post("/", agentAPI.createAgent);
router.patch("/:id", agentAPI.updateAgent);
router.delete("/:id", agentAPI.deleteAgent);
router.get("/:id", agentAPI.fetchAgentById);

//extensions
router.get("/", extensionAPI.fetchAllExtensions);
router.post("/", extensionAPI.createExtension);
router.patch("/:id", extensionAPI.updateExtension);
router.delete("/:id", extensionAPI.deleteExtension);
router.get("/:id", extensionAPI.fetchExtensionById);

//frameworks
router.get("/", frameworkAPI.fetchAllFrameworks);
router.post("/", frameworkAPI.createFramework);
router.patch("/:id", frameworkAPI.updateFramework);
router.delete("/:id", frameworkAPI.deleteFramework);
router.get("/:id", frameworkAPI.fetchFrameworkById);

module.exports = router;
