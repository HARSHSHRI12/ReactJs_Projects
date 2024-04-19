import React from 'react'
import {BrowserRouter,Routes,Route, Link}from 'react-router-dom'
import Lin from './Lin'
import C_home from './C_home'


export default function Navbar() {
  return (
   
        <BrowserRouter>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="javascript:void(0)">
              CM-System
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mynavbar">
              <ul class="navbar-nav me-auto">
                <li class="nav-item">
                  <Link class="nav-link" to="/ch">
                    Home
                  </Link>
                  {/*<a class="nav-link" href="javascript:void(0)">Link</a>*/}
                </li>
                <li class="nav-item-a" style={{marginRight:"1100px"}}>
                  <Link class="nav-link" to="/Ol">
                  E-FIR
                  </Link>
                  {/*<a class="nav-link" href="javascript:void(0)">Link</a>*/}
                </li>
                <li class="nav-item-b" style={{marginRighleft:"1000px"}}>
                  <Link class="nav-link" to="/lin">
                  <span style={{color:"blue"}}className="fa fa-user">&nbsp;</span>
                   Login
                  </Link>
                  {/*<a class="nav-link" href="javascript:void(0)">Link</a>*/}
                  
                </li>
              </ul>
             </div>
          </div>
        </nav>
         <div class="img">
        <Routes>
            <Route path="lin" element={<Lin/>}/>
            <Route path="ch" element={<C_home/>}/>
        </Routes>
        </div>
        </BrowserRouter>
        
       
  )
}
