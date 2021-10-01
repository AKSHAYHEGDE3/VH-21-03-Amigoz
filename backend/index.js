const express=require("express");
const cors = require('cors');
const mongoose = require("mongoose");

const mongodb = "mongodb+srv://akshay:12345@cluster0.dbem1.mongodb.net/project?retryWrites=true&w=majority"


const app=express() //creating an express application

let PORT =process.env.PORT||5000
mongoose.connect(mongodb,{useNewUrlParser: true,  useUnifiedTopology: true  } ).then(()=>{app.listen(PORT,()=>{
    console.log(`Listening at ${PORT}`)
})}) //connecting to the database

var corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200 // For legacy browser support
}
app.use(cors(corsOptions));

app.get("",(req,res)=>{
    res.send("home")
})


