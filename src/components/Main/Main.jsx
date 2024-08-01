import React from "react";
import "../Main/Main.scss";
import img from "../../assets/img.png";

export default function Main() {
  return (
    <div className="Main">
      
      <img src={img} alt="" />
      <h1 className="Main__Title">
        Make your interior more minimalistic & modern
      </h1>
      <p className="Main__Descp">Turn your room with panto into a lot more minimalist and modern with ease and speed</p>
    </div>
  );
}
