import React from "react";
import Home from "./Home";
import User_login from "./User_login";
import Official_login from "./Official_login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Front_page() {
  return (
    <div>
      <BrowserRouter>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="javascript:void(0)">
              shoP
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
                  <Link class="nav-link" to="/Hm">
                    Home
                  </Link>
                  {/*<a class="nav-link" href="javascript:void(0)">Link</a>*/}
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Ul">
                   Login
                  </Link>
                  {/*<a class="nav-link" href="javascript:void(0)">Link</a>*/}
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Ol">
                    Cart
                  </Link>
                  {/*<a class="nav-link" href="javascript:void(0)">Link</a>*/}
                </li>
              </ul>
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="text"
                  placeholder="Search"
                />
                <button class="btn btn-primary" type="button">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/Hm" element={<Home />} />
          <Route path="Ul" element={<User_login />} />
          <Route path="Ol" element={<Official_login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
