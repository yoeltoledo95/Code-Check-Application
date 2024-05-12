const express = require('express');
const {
    createCodeBlock,
    getCodeBlocks,
    getCodeBlock,
    deleteCodeBlock,
    updateCodeBlock
} = require("../controllers/codeBlockController");

const router = express.Router();

// GET all code blocks
router.get("/", getCodeBlocks);

// GET a single code block
router.get("/:id", getCodeBlock);

// POST a new code block
router.post("/", createCodeBlock);

// Delete a code block
router.delete("/:id", deleteCodeBlock);

// Update a code block
router.patch("/:id", updateCodeBlock);


module.exports = router;