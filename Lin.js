import React, { useState, useRef } from "react";
import CrimeIn from './CrimeIn'
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";


export default function Lin() {
  const [usname, updusname] = useState();
  const [Ecode, upEcode] = useState();
  const [passw, uppassw] = useState();
  const [showError, setError] = useState(false);

  const com1 = useRef();
  const com2 = useRef();
  const com3 = useRef();
  
  

  function login() {
    updusname("");
    upEcode("");
    uppassw("");

    const nameRegex = /^[^0-9]+$/;

    if (com1.current.value.length === 0) {
      updusname("Enter user name!!");
      setError(true);
    } else if (!nameRegex.test(com1.current.value)) {
      updusname("name should not start with number");
      setError(true);
    }
    if (com2.current.value.length === 0) {
      upEcode("code is compulsory for login ");
    } else if (com2.current.value.length >= 6) {
      upEcode("code must be >6");
    }
    if (com3.current.value.length < 8) {
      uppassw("password must be enter");
    } else if (com3.current.value === "#harsh234") {
      
    alert("hello harsh");
    <BrowserRouter>
    <Link to="cin">next</Link>
    <Routes>
      <Route path="/cin" element={<CrimeIn/>}/>
      </Routes>
      </BrowserRouter>
    }
  }

  return (
    <div class="img">
      <div className="container">
        <div
          className="card"
          style={{
            marginTop: "50px",
            marginLeft: "140%",
            width: "400px",
            height: "420px",
            borderRadius: "60px",
            border: "1px solid red",
          }}
        >
          <div style={{ marginTop: "40px" }}>
            <h6 style={{ color: "solid black", marginLeft: "20px" }}>
              UserName
            </h6>
            <input
              type="text"
              placeholder="username"
              ref={com1}
              className="form-control"
            />
            {showError && (
              <div style={{ color: "red", marginLeft: "10px" }}>{usname}</div>
            )}
            <br />
            <h6 style={{ color: "solid black", marginLeft: "20px" }}>E-Code</h6>
            <input
              type="code"
              placeholder="Employee-code"
              ref={com2}
              className="form-control"
            />
            <div style={{ color: "red", marginLeft: "10px" }}>{Ecode}</div>
            <br />
            <h6 style={{ color: "solid black", marginLeft: "20px" }}>
              Password
            </h6>
            <input
              type="password"
              placeholder="Password"
              ref={com3}
              className="form-control"
            />
            <div style={{ color: "red", marginLeft: "10px" }}>{passw}</div>
            <br />
          </div>

          <span
            style={{ marginLeft: "250px", marginBottom: "50px" }}
            className="fa fa-user"
          >
            &nbsp;
            <input
              style={{ width: "100px" }}
              type="button"
              value="login"
              className="btn btn-primary"
              onClick={login}
            />
          </span>
        </div>
      </div>
      
      
    </div>
  );
}