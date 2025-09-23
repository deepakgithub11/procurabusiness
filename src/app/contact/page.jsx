'use client'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './style.css'

const Contact = () => {

  const {
    register,
    handleSubmit
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const res = await fetch('/api/form', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })

      const resData = await res.json();
      console.log(resData.data)

      if (!res.ok) {
        alert('Some Error Occured')
      } else {
        alert(resData.message);
      }
    } catch (err) {
      alert('Error Occured', err)
    }
  }

  return (
    <>
      <div className='contact-container'>

        <div className='contact-img'>
          <img src='images/contact.jpg' />
        </div>

        <div className='contact-form'>
          {/* <div>{getdata.contact ? getdata.contact + ' received' : 'Loading Data'}</div> */}

          <form className='contact-formm' onSubmit={handleSubmit(onSubmit)}>
            <h1>API not Integrated</h1>

            <h2>Contact Us</h2>
            <div className='input'>
              <div>Name:</div><input {...register('name')} />
            </div>

            <div className='input'>
              <div>Email:</div>
              <input type='email' {...register('email')} />
            </div>

            <div className='input'>
              <div>Phone:</div>
              <input type='phone' {...register('phone')} />
            </div>

            <div className='input'>
              <div>Message:</div>
              <input {...register('message')} />
            </div>

            <input type='submit' />

          </form>

        </div>

      </div>
    </>
  )
}

export default Contact