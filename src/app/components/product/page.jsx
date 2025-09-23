'use client'
import React, { useEffect, useState } from "react";
import './style.css';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantities, setQuantities] = useState({});

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

  const increaseQuantity = (productId) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: (prev[productId] || 1) + 1
    }));
  };

  const decreaseQuantity = (productId) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max((prev[productId] || 1) - 1, 1) // min 1
    }));
  };

  const handleOrder = async (productId, price) => {
    const quantity = quantities[productId] || 1;
    const total = quantity * price;

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId, quantity, total }),
      });
      if (!res.ok) throw new Error('Failed to place order');
      alert('Order placed successfully!');
    } catch (err) {
      console.error(err);
      alert('Error placing order');
    }
  };

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

          <div className="order-section">
            <div className="quantity-selector">
              <button onClick={() => decreaseQuantity(product.id)}>-</button>
              <span>{quantities[product.id] || 1}</span>
              <button onClick={() => increaseQuantity(product.id)}>+</button>
            </div>
            <button
              className="view-btn"
              onClick={() => handleOrder(product.id, product.price)}
            >
              Order Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
