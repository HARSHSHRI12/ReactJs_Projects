import React from "react";
import Productview from "./Productview";
import Productdetails from "./Productdetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Mainpage() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Productview />} />
          <Route path="Prodet/:Pid" element={<Productdetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
