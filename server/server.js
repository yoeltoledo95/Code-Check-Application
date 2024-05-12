const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


// initialze express app
const app = express();
const codeBlocksRoutes = require('./routes/codeblocks')

//middleware
app.use(express.json());
app.use(cors());

app.use((req,res , next) => {
    console.log(req.path, req.method)
    next()
});

//routes
app.use("/api/codeBlocks", codeBlocksRoutes);

//connect to db
MONGO_URI = "mongodb+srv://yoeltoledo:yoeltoledo@cluster0.8hn8fu1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(5000, () => {
            console.log("Connected to DB & server listening on port 5000!")
        });
    })
    .catch(() => {
        console.log(error)
    });

