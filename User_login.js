import React, { useState } from 'react'

export default function User_login() {
    var[ul,upul]=useState()
    var log=()=>{
      upul("harsh")
    }
  

    if(log==upul){
      alert("your login Successfully");
    }
    else{
      alert("Try again")
    }

  return (
    <div>
       <input type="text"  id="u1" placeholder='Username'  /><br/>
       <input type='password'  id="p1" placeholder='Password'/><br/>
       <button className='btn btn-secondary' onClick={log}>Login</button>
    </div>
  )
}
