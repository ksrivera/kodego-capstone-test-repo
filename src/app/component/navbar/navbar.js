import Link from 'next/link'
import React from 'react'
import ucode_logo from '/KODEGO/git collab/test-repo/src/app/asset/img/logo_transparent.png'

import Image from 'next/image'
const Navbar = () => {
  return (
    <div className='navbar bg-neutral-100 h-24 '>
             
            <Image src={ucode_logo} className='logo_nav w-40 ' />
         
          <div>
            <Link href="/"><span>Home</span></Link>
            <Link href="/about"><span>About</span></Link>
            <Link href="/contact"><span>Contact Us</span></Link>
            <Link href="/sign_in"><span>Sign In</span></Link>
          </div>
        
    </div>
  )
}

export default Navbar