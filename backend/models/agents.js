const mongoose = require("mongoose");

const agentSchema = mongoose.Schema({
  title: String,
  image: String,
  category: String,
  content: String,
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Agent", agentSchema);
