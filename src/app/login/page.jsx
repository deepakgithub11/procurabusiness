'use client'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { signIn } from "next-auth/react"
import './style.css'

const Login = () => {

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const { register, handleSubmit, formState: { isSubmitting } } = useForm();

  const submit = async () => {
    // const res = await signIn('credentials', {
    //   username,
    //   password,
    //   callbackUrl: '/dashboard'
    // })
    // console.log(res) 
  }

  return (
    <>
      <div className='sign-up-container'>

        <div className='sign-up-img'>
          <img src='images/welcome.jpg' alt='Welcome' />
        </div>

        <div className='sign-up-form'>

          <h2>Login</h2>
          <form className='sign-up-formm' onSubmit={handleSubmit(submit)}>

            <div className='input'>
              <div>Username</div>
              <input {...register('username')} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" />
            </div>

            <div className='input'>
              <div>Password</div>
              <input type="password" {...register('password')} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
            </div>

            <input disabled={isSubmitting} type='submit' />
          </form>
        </div>
      </div>
    </>
  )
}

export default Login