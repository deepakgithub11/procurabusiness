'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';
import './style.css'

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter()

  const handleclick = async () => {
    await signOut();
    router.push('/')
  }

  return (
    <>
      <nav className='adminn-container'>
        <div className='admin-navbar'>
          <div className='admin-nav-logo'>
            <ul className='admin-nav-link'>
              <li><Link href={{ pathname: '/admin-users' }}> Users </Link></li>
              <li><Link href={{ pathname: '/admin-products' }}> Products</Link></li>
              <li><Link href={{ pathname: '/admin-add-product' }}>Add Products</Link></li>
              <li><Link href={{ pathname: '/admin-orders' }}>Orders</Link></li>
            </ul>

            <button className='btn-warning' onClick={handleclick}>Sign Out</button>
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
          <li><Link onClick={() => setIsOpen(false)} href={{ pathname: '/admin-users' }}>Users</Link></li>
          <li><Link onClick={() => setIsOpen(false)} href={{ pathname: '/admin-products' }}> Products</Link></li>
          <li><Link onClick={() => setIsOpen(false)} href={{ pathname: '/admin-add-product' }}>Add Product</Link></li>
          <li><Link onClick={() => setIsOpen(false)} href={{ pathname: '/admin-orders' }}>Ordersn</Link></li>
        </ul>
      </div>
    </>
  )
}

export default AdminNavbar
