import React from 'react'
import {  useState,useEffect } from 'react';
import Navbar from './navbar/Navbar'
import axios from 'axios'
import Tesseract from 'tesseract.js';
import { createWorker } from 'tesseract.js';
import Spinner from './Spinner';



const Home = () => {
    
    const [image, setimage] = useState("")
    const [details, setDetails] = useState({
        date :"",
        price : "",
        currency:"",
    })
    const [text, setText] = useState("")
    const [loading,setLoading]= useState(false)
    const [view,setView]= useState(false)
    

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
        setLoading(true)
         return   fetch("http://localhost:5000/postImg",{
            method:"post",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({image:image.imgUrl,description:text})
        }).then(res=>res.json()).then(result=>{
            setDetails({date:result.date,price:result.price,currency:result.currency})
            setLoading(false)
            setView(true)
        })
    }

    
    console.log(details)
    
    

    return (
        <div>
            <Navbar />
            <h1 style={{
                color:"white",
                width:"500px",
                height:"100px",
                border:"1px solid black",
                borderRadius:"15px",
                margin:"0 auto",
                marginTop:"2rem",
                paddingTop:"1.3rem",
                backgroundColor:"#008037"
                }}>UPLOAD YOUR BILL
                </h1>

                <div style={{
                    border:"1px solid black",
                    width:"500px",
                    height:"250px",
                    margin:"0 auto",
                    marginTop:"2rem",
                    paddingTop:"1rem",
            }}>
                         <input type="file" onChange={e=>  setimage(e.target.files[0])} className="form-control" />
                         <button style={{marginTop:"1.2rem"}}  onClick={e=>imageUpload(e)} className="btn btn-warning">upload</button>
                    <input
                     style={{marginTop:"1rem",border:"1px solid black"}}
                     type="text"
                     placeholder="Add some description"
                     value={text}
                     onChange={e=>setText(e.target.value)}
                       />
                       <br />
                    <button style={{marginTop:"1rem"}} onClick={handleConvert}>convert</button>
                </div>

                {loading?<Spinner /> :<span></span>}
                {
                  view ? 
                
                <div style={{
                    border:"1px solid black",
                    height:"100px",
                    width:"400px",
                    margin:"0 auto",
                    marginTop:"2rem",
                    paddingTop:"1rem"

                }}>
                   Purchased at :{details.date}<br/>
                    Amount:{details.currency} {details.price}<br/>
                    Note:{text}
                    
                </div> : <div></div>
                }
        </div>

    )
}

export default Home
