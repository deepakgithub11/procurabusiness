'use client'
import React, { useEffect, useState } from "react";
import "./style.css"; // optional, for custom styles

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("/api/admin-orders");
        const data = await res.json();
        setOrders(data.orders || []);
      } catch (err) {
        console.error("Error fetching orders:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) return <p>Loading orders...</p>;

  return (
    <div className="admin-orders-container">
      <h2>All Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>User</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>
                  {order.user?.username} <br />
                  <small>{order.user?.email}</small>
                </td>
                <td>
                  {order.product?.name} <br />
                  <small>₹ {order.product?.price}</small>
                </td>
                <td>{order.quantity}</td>
                <td>₹ {order.total.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminOrders;
