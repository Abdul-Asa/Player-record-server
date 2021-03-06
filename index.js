const express = require("express");
const cors = require("cors");
const router = require("./routes/app.js");
const client = require("./database/db.js");

const app = express();
const port = process.env.PORT|| 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
client.connect();

app.use((req,res,next)=>{
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}); //console log the full url

app.get("/",(req,res)=>{
    res.json("Welcome!");
});

app.use("/player",router);

app.listen(port,()=>{
    console.log(`Server is running on localhost:${port}`)
})