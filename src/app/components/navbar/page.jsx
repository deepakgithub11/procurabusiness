'use client'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import './style.css'

const Navbar = () => {

  const [isOpen, setIsopen] = useState(false);

  return (
    <>
      <nav className='container'>
        <div className='navbar'>
          <div className='nav-logo'>
            <img src='images/bird.png' width={50} height={50} />
            <ul className='nav-link' id='nav-link'>
              <li><Link href={{ pathname: '/' }}> Home </Link></li>
              <li><Link href={{ pathname: '/contact' }}>Contact Us</Link></li>
              <li><Link href={{ pathname: '/admin-dashboard' }}>Admin Panel</Link></li>
            </ul>
          </div>
          <ul className='nav-link' id='nav-link'>

            <li><Link href={{ pathname: '/login' }}>Login</Link></li>
            <li><Link href={{ pathname: '/sign-up' }}>Sign Up</Link></li>
          </ul>
          <div className='hamburger'>
            <button style={{ all: 'unset' }} onClick={() => { setIsopen(!isOpen) }} >
              {isOpen ? <IoMdClose size={30} /> : <GiHamburgerMenu size={30} />}
            </button>
          </div>
        </div >
      </nav >
      <>
        <div className={`modal ${isOpen ? 'visible' : ''}`}>
          {/* <button className='cls-btn' onClick={() => { setIsopen(false) }}>
              <IoMdClose size={30} />
            </button> */}
          <ul className='mobile-nav-link' id='mobile-nav-link'>
            <li><Link onClick={() => { setIsopen(!isOpen) }} href={{ pathname: '/' }}>Home</Link></li>
            <li><Link onClick={() => { setIsopen(!isOpen) }} href={{ pathname: '/contact' }}>Contact Us</Link></li>
            <li><Link onClick={() => { setIsopen(!isOpen) }} href={{ pathname: '/login' }}>Login In</Link></li>
            <li><Link onClick={() => { setIsopen(!isOpen) }} href={{ pathname: '/sign-up' }}>Sign Up</Link></li>
          </ul>
        </div>
      </>
    </>
  )
}

export default Navbar