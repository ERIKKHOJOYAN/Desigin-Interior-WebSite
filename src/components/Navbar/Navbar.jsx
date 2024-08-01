import React from "react";
import "./Navbar.scss";
export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar__Nav">
        <h1>Panto</h1>
        <div className="Navbar__Nav__Descp">
          <p>Shop</p>
          <p>About us</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
}
