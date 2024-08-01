import React, { useState } from "react";
import "../Shop/Shop.scss";

import Chair1 from "../../assets/Chair/Chair1.jpeg";
import Chair2 from "../../assets/Chair/Chair2.jpeg";
import Chair3 from "../../assets/Chair/Chair3.jpeg"
import Beds1 from "../../assets/Beds/Beds1.jpg";
import Beds2 from "../../assets/Beds/Beds2.jpg";
import Beds3 from "../../assets/Beds/Beds3.jpeg";
import Sofa1 from "../../assets/Sofa/Sofa1.jpeg";
import Sofa2 from "../../assets/Sofa/Sofa2.jpeg";
import Sofa3 from "../../assets/Sofa/Sofa3.jpeg";
import Lamp1 from "../../assets/Lamp/Lamp1.jpeg";
import Lamp2 from "../../assets/Lamp/Lamp2.jpg";
import Lamp3 from "../../assets/Lamp/Lamp3.jpeg"
const categories = {
  chair: [
    {
      id: 1,
      image: Chair1,
      title: "Chair 1",
      description: "Chair",
      price: "$99.99",
    },
    {
      id: 2,
      image: Chair2,
      title: "Chair 2",
      description: "Chair",
      price: "$129.99",
    },
    {
      id: 3,
      image: Chair3,
      title: "Chair 3",
      description: "Chair",
      price: "$109.99",
    },
  ],
  bed: [
    {
      id: 1,
      image: Beds1,
      title: "Bed 1",
      description: "Bed",
      price: "$499.99",
    },
    {
      id: 2,
      image: Beds2,
      title: "Bed 2",
      description: "Bed",
      price: "$549.99",
    },
    {
      id: 3,
      image: Beds3,
      title: "Bed 3",
      description: "Bed",
      price: "$666.99",
    },
  ],
  sofa: [
    {
      id: 1,
      image: Sofa1,
      title: "Sofa 1",
      description: "Sofa",
      price: "$699.99",
    },
    {
      id: 2,
      image: Sofa2,
      title: "Sofa 2",
      description: "Sofa",
      price: "$799.99",
    },
    {
      id: 3,
      image: Sofa3,
      title: "Sofa 3",
      description: "Sofa",
      price: "$855.99",
    },
  ],
  lamp: [
    {
      id: 1,
      image: Lamp1,
      title: "Lamp 1",
      description: "Lamp",
      price: "$49.99",
    },
    {
      id: 2,
      image: Lamp2,
      title: "Lamp 2",
      description: "Lamp",
      price: "$59.99",
    },
    {
      id: 3,
      image: Lamp3,
      title: "Lamp 3",
      description: "Lamp",
      price: "$80.99",
    },
  ],
};

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("chair");

  return (
    <div className="Shop">
      <h1 className="Shop__Title">Best Selling Products</h1>
      <div className="Shop__Tabs">
        <button
          className={`Shop__Tab ${
            selectedCategory === "chair" ? "active" : ""
          }`}
          onClick={() => setSelectedCategory("chair")}
        >
          Chairs
        </button>
        <button
          className={`Shop__Tab ${selectedCategory === "bed" ? "active" : ""}`}
          onClick={() => setSelectedCategory("bed")}
        >
          Beds
        </button>
        <button
          className={`Shop__Tab ${selectedCategory === "sofa" ? "active" : ""}`}
          onClick={() => setSelectedCategory("sofa")}
        >
          Sofas
        </button>
        <button
          className={`Shop__Tab ${selectedCategory === "lamp" ? "active" : ""}`}
          onClick={() => setSelectedCategory("lamp")}
        >
          Lamps
        </button>
      </div>
      <div className="Shop__Grid">
        {categories[selectedCategory].map((product) => (
          <div key={product.id} className="Shop__Card">
            <div className="Shop__ImageContainer">
              <img
                src={product.image}
                alt={product.title}
                className="Shop__Image"
              />
            </div>
            <div className="Shop__Details">
              <h2 className="Shop__ProductTitle">{product.title}</h2>
              <p className="Shop__ProductDescription">{product.description}</p>
              <span className="Shop__Price">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
