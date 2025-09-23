'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import './style.css'

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className='adminn-container'>
        <div className='admin-navbar'>
          <div className='admin-nav-logo'>
            <ul className='admin-nav-link'>
              <li><Link href={{ pathname: '/' }}> Users </Link></li>
              <li><Link href={{ pathname: '/contact' }}> Products</Link></li>
              <li><Link href={{ pathname: '/contact' }}>Add Products</Link></li>
              <li><Link href={{ pathname: '/admindashboard' }}>Orders</Link></li>
            </ul>
          </div>
          <div className='admin-hamburger'>
            <button style={{ all: 'unset' }} onClick={() => { setIsOpen(!isOpen) }}>
              {isOpen ? <IoMdClose size={30} /> : <GiHamburgerMenu size={30} />}
            </button>
          </div>
        </div>
      </nav>
      <div className={`admin-modal ${isOpen ? 'visible' : ''}`}>
        <ul className='admin-mobile-nav-link'>
          <button className='cls-btn' onClick={() => { setIsOpen(false) }}>
            <IoMdClose size={30} />
          </button>
          <li><Link onClick={() => setIsOpen(false)} href={{ pathname: '/' }}>Users</Link></li>
          <li><Link onClick={() => setIsOpen(false)} href={{ pathname: '/contact' }}> Products</Link></li>
          <li><Link onClick={() => setIsOpen(false)} href={{ pathname: '/contact' }}>Add Product</Link></li>
          <li><Link onClick={() => setIsOpen(false)} href={{ pathname: '/login' }}>Ordersn</Link></li>
        </ul>
      </div>
    </>
  )
}

export default AdminNavbar
