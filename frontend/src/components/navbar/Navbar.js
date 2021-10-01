import React from 'react'


export default function navbar() {
  return (
    <div>
      <nav style={{height:"20vh"}} class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div  class="container-fluid">
          <a style={{fontSize:"2rem",backgroundColor:"#d9d9d9",borderRadius:"15px"}} class="navbar-brand" href="#"><span style={{color:"black"}}>Expense</span> <span style={{color:"#008037"}}>Analysis</span></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul style={{fontSize:"1.5rem"}} class="navbar-nav me-auto mb-2 mb-lg-0">
              <li style={{marginLeft:"5%"}} class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li style={{marginLeft:"5%",width:"20vw"}}  class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Dashboard</a>
              </li>
              <li style={{marginLeft:"5%",backgroundColor:"#008037",width:"15vw",height:"5vw",paddingTop:"2%"}} class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Oct 1, 2021</a>
              </li>
                
              
            </ul>
            
              
            

          </div>
        </div>
      </nav>
    </div>
  )
}