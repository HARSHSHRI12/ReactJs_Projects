import React from "react";
import { BrowserRouter,Link,Routes,Route} from "react-router-dom";
import Login_page from "./Login_page";
export default function Home_page() {
  return (
    <div className="hero">
        <BrowserRouter>
      <div className="content">
        <h1>Hello Student</h1>
        <p>Welcome (name) choose your best college in noida</p>
       <Link to="/lg">Start Now</Link>
    
      </div>
      <Routes>
        <Route path="lg" element={<Login_page/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
