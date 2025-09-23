'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './style.css';

const AdminAddProduct = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [imagePreview, setImagePreview] = useState(null);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', data.price);
    if (data.image[0]) {
      formData.append('image', data.image[0]);
    }

    try {
      const res = await fetch('/api/add-product', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Failed to add product');
      alert('Product added successfully!');
      reset();
      setImagePreview(null);
    } catch (err) {
      console.error(err);
      alert('Error adding product');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="product-container">
      <h2 className="title">Add New Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="formGroup">
          <label className="label">Name</label>
          <input
            type="text"
            {...register('name', { required: true })}
            className="input"
          />
          {errors.name && <span className="error">Name is required</span>}
        </div>

        <div className="formGroup">
          <label className="label">Description</label>
          <textarea
            {...register('description')}
            className="input textarea"
          />
        </div>

        <div className="formGroup">
          <label className="label">Price</label>
          <input
            type="number"
            step="0.01"
            {...register('price', { required: true, valueAsNumber: true })}
            className="input"
          />
          {errors.price && <span className="error">Price is required</span>}
        </div>

        <div className="formGroup">
          <label className="label">Image</label>
          <input
            type="file"
            accept="image/*"
            {...register('image')}
            onChange={handleImageChange}
            className="input"
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="imagePreview"
            />
          )}
        </div>

        <button type="submit" className="button">Add Product</button>
      </form>
    </div>
  );
};

export default AdminAddProduct;
