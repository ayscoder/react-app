import React from "react";
import imgUrl from "../assets/bubble.jpeg";
import "../App.css";
// var style = {
//   color: "white",
//   backgroundColor: "black",
//   borderTop: "1px solid #E7E7E7",
//   textAlign: "right",
//   padding: "20px",
//   position: "relative",
//   left: "0",
//   bottom: "0",
//   height: "60px",
//   width: "100%",
// };

var style = {
  color: "white",
  backgroundColor: "Black",

  padding: "3em",
  position: "fixed-position",
  bottom: "0",
  width: "100%",
};
// var phantom = {
//   display: "block",
//   padding: "20px",
//   height: "60px",
//   width: "100%",
// };
const Footer = () => {
  return (
    <div style={style}>
      <div>
        <div className="row">
          <div className="col">
            <h4>ADA</h4>
            <ul className="list-unstyled">
              <li>401-402-987</li>
              <li>Mascow, Russia</li>
              <li>123 Street South North</li>
            </ul>
          </div>
          <div className="col">
            <h4>OTHER STUFF</h4>
            <ul className="list-unstyled">
              <li>Meme DANK</li>
              <li>Other Stuff</li>
              <li>Good Stuff</li>
            </ul>
          </div>
          <div className="col">
            <h4>WELL ANOTHER COL</h4>
            <ul className="list-unstyled">
              <li>JEEY DANK</li>
              <li>White Stuff</li>
              <li>Main Stuff</li>
              <li>Melodyysdf</li>
            </ul>
          </div>
        </div>
        <br />
        <div className="row">
          <p>
            @{new Date().getFullYear()} | ADA Inc. All rights reserved |
            <a href="/about" style={{ color: "white" }}>
              &nbsp; Terms of Service &nbsp;
            </a>
            |&nbsp;
            <a href="" style={{ color: "white" }}>
              Privacy
            </a>{" "}
            |
            <a href="" style={{ color: "white" }}>
              &nbsp; Legal
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
