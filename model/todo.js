const mongoose = require("mongoose");

const schemaTodo = new mongoose.Schema(
    {
        text: { type: String, required: true, lowercase: true, max: 30, minlength: 1},
        date: { type: Date,  default: Date.now }
    });

const todoitem = mongoose.model("todo", schemaTodo);

module.exports = todoitem;