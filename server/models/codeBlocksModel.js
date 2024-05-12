const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const codeBlockSchema = new Schema({
    id: {
        type: Number,
    },

    title: {
        type: String,
    },
    code: {
        type: String,
    },
    solution: {
        type: String,
    },
    
    counter: {
        type: Number
    },

    answer: {
        type: String,
    }
});

module.exports = mongoose.model("CodeBlock", codeBlockSchema);