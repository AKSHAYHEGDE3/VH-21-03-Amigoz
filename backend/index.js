//const mongodb = "mongodb+srv://akshay:12345@cluster0.dbem1.mongodb.net/project?retryWrites=true&w=majority"
var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
const cors = require('cors');
const Tesseract = require('tesseract.js');
const Client = require('@veryfi/veryfi-sdk')

// let url = ""
// const fs = require('fs');
// const Tesseract = require('tesseract.js');
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
    // var phone = req.body.phone;
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
    
    

})

app.post("/postImg",(req,res)=>{
    var image = req.body.image;
    var description = req.body.description;
    // var email = req.body.email;
    // // var phone = req.body.phone;
    // var password = req.body.password;
        console.log(req.body)
   
//         const {createWorker} = require('tesseract.js')
//         const worker = createWorker({
//         logger: m => console.log(m)
//   });
  


    // Tesseract.recognize(
    //     req.body.image,
    //     'eng',
    //     { logger: m => console.log(m) }
    // )
    // .then(({ data: { text } }) => {
    //     console.log(text)
    //     return res.send({
    //         text: text
    //     });
    // })
 const client_id='vrfz5s1PcARhGDp4osvmHRhZNgRl0gWLG95u4mp'
const client_secret ='wdyvXdeE3HKEeylZxStWP4iCGORmgt1fAN40gxty7ACidrgVZyJT1iexMGdzZhyEm7yesjNyCmBMpcEZJxZipHMazItEw1GYDIm4ETreGKr7G0ZaYbfi2h3fFSuCWehy'
const username ='akshayhegde158'
const api_key ='43ccb8f924d9b6cc8b933727e8772740'

let my_client = new Client(client_id,client_secret,username,api_key)

const r =   async ()=>    await my_client.process_document_url(req.body.image)


r().then((response)=>{

    // console.log(response.total)
    // console.log(response.date)

    var data = {
        "price": response.total,
        "date": response.date,
        "currency": response.currency_code,
        "description": description
    }
     
        db.collection('details').insertOne(data,(err,collection)=>{
            if(err){
                throw err;
            }
            console.log("Record Inserted Successfully");
            // console.log(data)
            res.status(200).send(data)

       
        })


    // return res.send ({
    //     total:response.total,
    //     date:response.date,
    //     currency:response.currency_code,
    // }) 

    

})
    
    


})








app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    // return res.redirect('index.html');
}).listen(5000);


console.log("Listening on PORT 5000");