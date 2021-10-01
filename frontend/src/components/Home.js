import React from 'react'
import Navbar from './navbar/Navbar'

const Home = () => {
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
                    <input type="file" />
                    <input style={{marginTop:"1.5rem"}} type="text" placeholder="Add some description if you want "/>
                </div>

        </div>

    )
}

export default Home
