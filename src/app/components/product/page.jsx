'use client'
import React, { useEffect, useState } from "react";
import './style.css';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        setProducts(data.products || []);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <p className="loading">Loading products...</p>;

  return (
    <div className="product-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          {product.image ? (
            <img src={product.image} alt={product.name} />
          ) : (
            <div className="no-image">No Image</div>
          )}
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
