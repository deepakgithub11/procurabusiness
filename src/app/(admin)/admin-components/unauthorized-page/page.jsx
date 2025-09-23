'use client'
import React from 'react';
import './style.css';
import Link from 'next/link';
import { AiOutlineLock } from 'react-icons/ai';

const Unauthorized = () => {
  return (
    <div className="unauth-container">
      <div className="unauth-card">
        <AiOutlineLock size={60} className="unauth-icon" />
        <h1>Access Denied</h1>
        <p>To get access please login</p>
        <Link href="/login" className="unauth-button">Login</Link>
      </div>
    </div>
  );
};

export default Unauthorized;
