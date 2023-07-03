"use client"

import Link from 'next/link'
import React from 'react'

import { usePathname } from 'next/navigation'


const Navbar = () => {
  const pathname = usePathname() 

  return (
    <div className='navbar bg-neutral-100 h-24 py-12 px-14 pl-32'>
             
             <Link href="/"><img src="/logo/transparent_logo.png" className='logo_nav w-40 ' /></Link>
          
          <div className='text-xl'>
            <Link href="/" className={pathname === "/" ? "px-4 py-2 mx-4 rounded-lg bg-lime-500 " : "text-black px-4 py-2 mx-4"}><span className=''>Home</span></Link>
            <Link href="/about" className={pathname === "/about" ? "px-4 py-2 mx-4 rounded-xl bg-lime-500 " : "text-black px-4 py-2 mx-4"}><span className=''>About</span></Link>
            <Link href="/contact" className={pathname === "/contact" ? "px-4 py-2 mx-4 rounded-lg bg-lime-500 " : "text-black px-4 py-2 mx-4"}><span className=''>Contact Us</span></Link>
            <Link href="/sign_in" className={pathname === "/sign_in" ? "px-4 py-2 mx-4 rounded-lg bg-lime-500 " : "text-black px-4 py-2 mx-4"}><span className=''>Sign In</span></Link>
          </div>
        
    </div>
  )
}

export default Navbar