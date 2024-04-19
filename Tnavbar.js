import React from "react";
import { BrowserRouter,Link,Routes,Route } from "react-router-dom";
import Home_page from "./Home_page";
import About_page from "./About_page";
import Contact_page from './Contact_page'

export default function Tnavbar() {
  return (
    <div>
        <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="fa fa-medium">&nbsp;</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="hp">
                  Home
                  </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="ap">
                 About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                 Course
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      BCA
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      
                      MCA
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Bcom(honrs)
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link" to="cp">
                  Contact
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
           </form>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="hp" element={<Home_page/>}></Route>
        <Route path="ap" element={<About_page/>}></Route>
        <Route path="cp" element={<Contact_page/>}></Route>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}
