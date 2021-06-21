const express = require("express");
const cors = require("cors");
const router = require("./routes/app.js");
const client = require("./database/db.js");

const app = express();
const port = process.env.PORT|| 3000;

app.use(cors());
client.connect();

app.get("/",(req,res)=>{
    res.json({
        message : "Welcome!"
    });
    
});

app.use("/player",router);

app.listen(port,()=>{
    console.log(`Server is running on localhost:${port}`)
})