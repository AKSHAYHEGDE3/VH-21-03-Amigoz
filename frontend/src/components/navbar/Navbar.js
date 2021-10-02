import React from 'react'
import { Link } from 'react-router-dom'

export default function navbar() {
  return (
    <div>
       <nav style={{height:"15vh"}} class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div  class="container-fluid">
          <Link style={{fontSize:"2rem",backgroundColor:"#d9d9d9",borderRadius:"15px"}} class="navbar-brand" to="/"><span style={{color:"black",paddingLeft:"10px"}}>Expense</span> <span style={{color:"#008037",paddingRight:"10px"}}>Analysis</span></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul style={{fontSize:"1.5rem"}} class="navbar-nav me-auto mb-2 mb-lg-0">
              <li style={{marginLeft:"5%",marginTop:"1.5%"}} class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li style={{marginLeft:"5%",width:"20vw",marginTop:"1.5%"}}  class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/stats">Statistics</Link>
              </li>
              <li style={{marginLeft:"5%",backgroundColor:"#008037",width:"15vw",height:"5vw",paddingTop:"2%"}} class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Oct 2, 2021</Link>
              </li>
                   
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}