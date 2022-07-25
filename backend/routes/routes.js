const express = require("express");
const app = express();
const router = express.Router();
// const multer = require("multer");

//import api's
const agentAPI = require("../controllers/agentAPI");
const extensionAPI = require("../controllers/extensionAPI");
const frameworkAPI = require("../controllers/frameworkAPI");

// const Storage = API.Storage;

//home
//agents

router.get("/agents/", agentAPI.fetchAllAgents);
router.post("/agents/", agentAPI.createAgent);
router.patch("/agents/:id", agentAPI.updateAgent);
router.delete("/agents/:id", agentAPI.deleteAgent);
router.get("/agents/:id", agentAPI.fetchAgentById);

//extensions
router.get("/extensions/", extensionAPI.fetchAllExtensions);
router.post("/extensions/", extensionAPI.createExtension);
router.patch("/extensions/:id", extensionAPI.updateExtension);
router.delete("/extensions/:id", extensionAPI.deleteExtension);
router.get("/extensions/:id", extensionAPI.fetchExtensionById);

// //frameworks
router.get("/frameworks/", frameworkAPI.fetchAllFrameworks);
router.post("/frameworks/", frameworkAPI.createFramework);
router.patch("/frameworks/:id", frameworkAPI.updateFramework);
router.delete("/frameworks/:id", frameworkAPI.deleteFramework);
router.get("/frameworks/:id", frameworkAPI.fetchFrameworkById);

module.exports = router;
