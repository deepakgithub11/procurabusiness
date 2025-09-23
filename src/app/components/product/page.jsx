import React from "react";
import "./style.css"; 


const products = [
  {
    id: 1,
    name: "Laptop",
    description: "A high-performance laptop suitable for work and gaming.",
    price: 75000,
    image: "images/bird.png",
  },
  {
    id: 2,
    name: "Smartphone",
    description: "Latest smartphone with amazing camera and fast processor.",
    price: 35000,
    image: "images/bird.png",
  },
  {
    id: 3,
    name: "Headphones",
    description: "Noise-cancelling headphones with superior sound quality.",
    price: 5000,
    image: "images/bird.png",
  },
  {
    id: 4,
    name: "Camera",
    description: "Professional DSLR camera for photography lovers.",
    price: 45000,
    image: "images/bird.png",
  },
];

const Product = () => {
  return (
    <div className="product-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p className="desc">{product.description}</p>
          <p className="price">₹ {product.price.toLocaleString()}</p>
          <button className="view-btn">View</button>
        </div>
      ))}
    </div>
  );
};

export default Product;
