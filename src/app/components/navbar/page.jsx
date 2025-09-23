'use client'
import React from 'react'
import Link from 'next/link'
import './style.css'

const Navbar = () => {


  return (
    <>
      <nav className='container'>
        <div className='navbar'>
          <div className='nav-logo'>
            <img src='images/bird.png' width={50} height={50} />
            <ul className='nav-link' id='nav-link'>
              <li><Link href={{ pathname: '/' }}> Home </Link></li>
              <li><Link href={{ pathname: '/contact' }}> About Us</Link></li>
              <li><Link href={{ pathname: '/contact' }}>Contact Us</Link></li>
            </ul>
          </div>
          <ul className='nav-link' id='nav-link'>

            <li><Link href={{ pathname: '/login' }}>Login</Link></li>
            <li><Link href={{ pathname: '/sign-up' }}>Sign Up</Link></li>
          </ul>
         
        </div >
      </nav >
      
    </>
  )
}

export default Navbar