import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Datafile from "./Datafile";
export default function Productdetails() {
  var params = useParams();
  return (
    <div className="container">
      {Datafile.map((onePro) => {
        var imgPath = "../" + onePro.pimg;
        if (onePro.id == params.Pid) {
          return (
            <div style={{ display: "flex", padding: "20px" }}>
              <div>
                <img src={imgPath} width="200px" height="200px" />
              </div>
              <div>
                <h2>{onePro.pname}</h2>
                <div>
                {onePro.price}
                  <div>
                    {onePro.desciption}
                      <div>{onePro.color}</div>
                    <div style={{display:'flex'}}>
                   <div style={{marginTop:"40px"}}>
                    <div>
                    <button  className="btn btn-primary" > Add To Card</button>
                    <Link className="btn btn-danger" style={{marginLeft:"30px"}} to="../"> back</Link>
                    </div>
            
                    </div>
                    </div>
                    </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
