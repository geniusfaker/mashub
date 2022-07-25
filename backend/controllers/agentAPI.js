const Agent = require("../models/agents");
// const multerStorage = multer.memoryStorage();

// let Storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads");
//   },

//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
//   },
// });

module.exports = class AGENT_API {
  // fetch all Agents

  static async fetchAllAgents(req, res) {
    try {
      const agents = await Agent.find();
      res.status(200).json(agents);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  // fetch agent by id

  static async fetchAgentById(req, res) {
    const id = req.params.id;
    try {
      const agent = await Agent.findById(id);
      res.status(200).json(agent);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  // create agent

  static async createAgent(req, res) {
    console.log(req.file);
    const agent = await req.body;
    try {
      await Agent.create(agent);
      res.status(201).json({ message: "agent created successfully" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  // delete agent

  static async deleteAgent(req, res) {
    const id = req.params.id;
    try {
      const res = await Agent.findByIdAndDelete(id);

      res.status(200).json({ message: "agent delete success" });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  // update agent

  static async updateAgent(req, res) {
    const id = req.params.id;
    const newPost = req.body;
    try {
      await Agent.findByIdAndUpdate(id, newPost);
      res.status(200).json({ message: "agent update success" });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
};
