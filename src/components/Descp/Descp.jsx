import React from "react";
import "../Descp/Descp.scss";
import DescpImg from "../../assets/Descp-img.jpg";
import DescpImg2 from "../../assets/Descp-img2.jpeg";
import DescpImg3 from "../../assets/Descp-img3.jpg";
export default function Descp() {
  return (
    <div className="Descp">
      <img src={DescpImg} alt="" />
      
      <div className="Descp__Info">
        <p>EXPERIENCES</p>
        <h1>We Provide You The Best Experience</h1>
        <span>
          You don’t have to worry about the result because all of these
          interiors are made by people who are professionals in their fields
          with an elegant and lucurious style and with premium quality materials
        </span>
      </div>
      <div className="Descp__Materials">
        <p>MATERIALS</p>
        <h1>Very serious materials for making furniture</h1>
        <span>
          Because panto was very serious about designing furniture for our
          environment, using a very expensive and famous capital but at a
          relatively low price
        </span>
        <div className="Descp__Materials__Img">
          <img src={DescpImg2} alt="Images" />
          <img src={DescpImg3} alt="Images" />
        </div>
      </div>
    </div>
  );
}
