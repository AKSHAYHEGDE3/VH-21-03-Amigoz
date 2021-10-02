import React from 'react'
import {  useState,useEffect } from 'react';
import Navbar from './navbar/Navbar'
import axios from 'axios'
import Tesseract from 'tesseract.js';
import { createWorker } from 'tesseract.js';



const Home = () => {
    
    const [image, setimage] = useState("")
    const [text, setText] = useState("")
    

    const imageUpload=(e)=>{
  
        e.preventDefault()
      console.log("called")
        let data = new FormData();
        data.append("file",image);
        data.append("api_key",753845595568637)
        data.append("upload_preset","Expense-bills");
        data.append("cloud_name","yatagram")
        console.log(data)
         fetch("https://api.cloudinary.com/v1_1/amigoz/upload",{
            method:"post",
            body:data
        }).then(res=>res.json()).then(result=>setimage({imgUrl:result.url}))
     
        console.log("sadf",image)

    }
    console.log(image)
    
    const handleConvert =  ()=>{
         return   fetch("http://localhost:5000/postImg",{
            method:"post",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({image:image.imgUrl})
        }).then(res=>res.json()).then(result=>console.log(result.text))
        }

    

    console.log(text)
    

    return (
        <div>
            <Navbar />
            <h1 style={{
                width:"500px",
                height:"100px",
                border:"1px solid black",
                borderRadius:"15px",
                margin:"0 auto",
                marginTop:"2rem",
                paddingTop:"1rem",
                backgroundColor:"#008037"
                }}>UPLOAD YOUR BILL
                </h1>

                <div style={{
                    border:"1px solid black",
                    width:"500px",
                    height:"200px",
                    margin:"0 auto",
                    marginTop:"2rem",
                    paddingTop:"1rem",
            }}>
                         <input type="file" onChange={e=>  setimage(e.target.files[0])} className="form-control" />
                         <button  onClick={e=>imageUpload(e)} className="btn btn-warning">upload</button>
                         <button onClick={handleConvert}>convert</button>
                   
                    <input style={{marginTop:"1.5rem"}} type="text" placeholder="Add some description if you want "/>
                </div>

                <div>
               
                </div>

        </div>

    )
}

export default Home
