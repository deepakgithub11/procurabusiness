'use client'
import React from 'react';
import './style.css';

const Loader = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading Please Wait...</p>
    </div>
  );
};

export default Loader;
