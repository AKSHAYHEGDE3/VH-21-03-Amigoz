//const mongodb = "mongodb+srv://akshay:12345@cluster0.dbem1.mongodb.net/project?retryWrites=true&w=majority"
var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
const cors = require('cors');
// const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb+srv://naman:naman@cluster0.nov13.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200 // For legacy browser support
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post('/signin',(req,res)=>{
    const {password,email }=req.body;

  try{
      db.collection('users').findOne({"email":req.body.email},(err,docs)=>{
          console.log(docs)
          res.status(200).send(docs)
      })
      
    
  }
  catch(err){
    
   let errors=alertError(err)
    res.status(400).send({errors})
  }
})

app.post("/sign_up",(req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var password = req.body.password;
        console.log(req.body)
    var data = {
        "name": name,
        "email" : email,
        "password" : password
    }
     
        db.collection('users').insertOne(data,(err,collection)=>{
            if(err){
                throw err;
            }
            console.log("Record Inserted Successfully");
            console.log(data)
            res.status(200).send(data)

            
            
            
        })
     
     
    
    // return res.redirect('signup_success.html')

})


app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    // return res.redirect('index.html');
}).listen(5000);


console.log("Listening on PORT 5000");