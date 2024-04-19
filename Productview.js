import React from "react";
import Datafile from "./Datafile";
import { Link } from "react-router-dom";
export default function Productview() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          marginTop: "10px",
          marginLeft: "30px",
          marginRight: "10px",
        }}
      >
        {Datafile.slice(0, 4).map((oneproduct) => {
          var path = "Prodet/" + oneproduct.id;
          return (
            <div
              className="card"
              style={{ padding: "10px", marginRight: "20px" }}
            >
              <img src={oneproduct.pimg} width="200px" height="200px" />
              <h5>{oneproduct.pname}</h5>
              <h6>{oneproduct.desciption}</h6>
              <h6>{oneproduct.color}</h6>

              <div>{oneproduct.price}</div>
              <Link className="btn btn-primary" to={path}>
                Show More
              </Link>
            </div>
          );
        })}
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "10px",
          marginLeft: "30px",
          marginRight: "10px",
        }}
      >
        {Datafile.slice(4, 8).map((oneproduct) => {
          var path = "Prodet/" + oneproduct.id;
          return (
            <div
              className="card"
              style={{ padding: "10px", marginRight: "20px" }}
            >
              <img src={oneproduct.pimg} width="200px" height="200px" />
              <h5>{oneproduct.pname}</h5>
              <h6>{oneproduct.desciption}</h6>
              <h6>{oneproduct.color}</h6>

              <div>{oneproduct.price}</div>
              <Link className="btn btn-primary" to={path}>
                Show More
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
