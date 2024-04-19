import React, { useState,useRef } from "react";

export default function Login_page() {
    var[uname,upuname]=useState("")
    var[uemail,upemail]=useState("")
    var[upass,uppass]=useState("")

    var ct1 = useRef();
    var ct2 = useRef();
    var ct3 = useRef();
  function fun1() {
      upuname("")
      upemail("")
      uppass("")
      if (ct1.current.value.length == 0) {
        upuname("Enter user Name");
      }
      
      else{
        if (ct2.current.value.length==0) {
          upemail("Enter your Email");
        }
       else{
        if (ct3.current.value.length <8 ) {
          uppass("Enter your password");
        } 
        else if (!ct2.current.value.includes("@gmail.com")) {
            upemail("Please enter a valid Email");
          }
    }
  }
  }
  function fun2(){
    (window.confirm("Are u sure for forget password!!"))
  }
  return (
    <div className="container">
      <div
        className="card-a"
        style={{
          marginTop: "30%",
          marginRight: "40%",
          border: "1px red solid",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1>Login page</h1>
        </div>
        <h5>UserName:</h5>
                    <input type="text" placeholder="Username" ref={ct1} className="form-control" />
                    <div style={{color:"red" ,fontSize:"18px"}}>{uname}</div>

 <h5> Email:</h5>
        
                     <input type="email" placeholder="enter your Email" ref={ct2} className="form-control" />
                       <div style={{color:"red" ,fontSize:"18px"}}>{uemail}</div>
        
        <h5>Password:</h5>
                        <input type="password"  placeholder="password" ref={ct3} className="form-control"/>
                        <div style={{color:"red",fontSize:"18px"}}>{upass}</div>
        &nbsp;
        <div className="lg">
          <input
            className="btn btn-primary"
            type="button"
            value="Login"
            onClick={fun1}
          />
          &nbsp;
          </div>
          <div className="fp">
            <input
              className="btn btn-danger"
              type="button"
              value="Forget password"
              onClick={fun2}
            />
          </div>
      </div>
    </div>
  );
}
