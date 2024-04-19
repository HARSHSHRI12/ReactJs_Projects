import React from 'react'
import axios from 'axios'


export default function CrimeIn() {
  function fun1(){
    
    axios.get("http://localhost:1000/harsh").then(dt=>{
      alert(dt.data)
    })
  }
  function fun2(){
    var obj={uname:"harsh", city:"uttar pradesh"}
    axios.post("http://localhost:1000/shrivastava",obj).then(dt=>{
      alert(dt.data)
    })
  
  }
  return (
    <div>     
   <input type='button' value="Click" onClick={fun1}/>
   <input type='button' value="Click" onClick={fun2}/>

    </div>
  )
}
