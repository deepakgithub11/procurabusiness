'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import './style.css'

const Sign_up = () => {

  const { register, handleSubmit, formState: { isSubmitting } } = useForm();
  
  const submit = async (data) => {
        try {

          const res = await fetch('/api/sign-up', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          })

          const result = await res.json()

          if (!res.ok) {
            alert(result.error || 'Form Not Submitted')
          }
          else alert(result.message)
        }
        catch (error) {
          alert(error.message)
        }
  }

  return (
    <div className='sign-up-container'>

      <div className='sign-up-img'>
        <img src='images/welcome.jpg' alt='Welcome' />
      </div>

      <div className='sign-up-form'>

        <h2>Create Account</h2>
        <form className='sign-up-formm' onSubmit={handleSubmit(submit)}>

          <div className='input'>
            <div>Username</div>
            <input {...register('username')} placeholder="Enter your username" />
          </div>

          <div className='input'>
            <div>Phone:</div>
            <input type="text" {...register('phone')} placeholder="Enter your Phone" />
          </div>

           <div className='input'>
            <div>Password</div>
            <input type="password" {...register('password')} placeholder="Enter your password" />
          </div>

          <input disabled={isSubmitting} type='submit' />
        </form>
      </div>
    </div>
  )
}

export default Sign_up