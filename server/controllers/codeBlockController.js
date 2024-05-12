const CodeBlock = require("../models/codeBlocksModel")

// Get all code blocks

const getCodeBlocks = async (req, res) => {
    const codeBlocks = await CodeBlock.find({})

    res.status(200).json(codeBlocks)
};


// Get a single code block


const getCodeBlock = async (req, res) => {
    const { id } = req.params

    const codeBlock = await CodeBlock.findById(id)

    res.status(200).json(codeBlock)
};
    

// Create a new code block

const createCodeBlock = async (req, res) => {
    const {id, title, code, solution, counter} = req.body;
    
    // Add a code block to db
    try{
        const codeBlock = await CodeBlock.create({id, title, code, solution, counter})
        res.status(200).json(codeBlock)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
};

// Delete a code block
const deleteCodeBlock = async(req, res) => {
    const { id } = req.params

    const codeBlock = await CodeBlock.findOneAndDelete({_id: id})
    res.status(200).json(codeBlock)
};


// Update a code block 
const updateCodeBlock = async(req, res) => {
    const { id } = req.params

    const codeBlock = await CodeBlock.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    res.status(200).json(codeBlock)
};


module.exports = {
    getCodeBlocks,
    getCodeBlock,
    createCodeBlock,
    deleteCodeBlock,
    updateCodeBlock
};