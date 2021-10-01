//const mongodb = "mongodb+srv://akshay:12345@cluster0.dbem1.mongodb.net/project?retryWrites=true&w=majority"
const express=require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const cors = require('cors');


//DATABASE VARIABLE
const mongodb = "mongodb://localhost:27017/mydb"




const app=express() //creating an express application

let PORT =process.env.PORT||5000
mongoose.connect(mongodb,{useNewUrlParser: true,  useUnifiedTopology: true  } ).then(()=>{app.listen(PORT,()=>{
    console.log(`Listening at ${PORT}`)
})}) //connecting to the database



//MIDDLEWARE
var corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200 // For legacy browser support
}
app.use(cors(corsOptions));





//IMPORTING ROUTES
const authRoutes= require("./routes/authRoutes.js")




//TESTING COOKIES
app.get("/set-cookies",(req,res)=>{
    res.cookie("name","TEjas")
    res.send("hi")
})
app.get('/get-cookies', (req, res) => {
    const cookies = req.cookies;
    console.log(req.cookies)
    
    res.json(cookies);
})

//USING ROUTES

app.use(authRoutes);
// app.use(postRoutes)
// app.use(conversationRoutes)
// app.use(messageRoutes)
// app.use(userRoutes)

app.get("",(req,res)=>{
    res.send("home")
})