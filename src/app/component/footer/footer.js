import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-neutral-100 flex flex-col'>

        <div className=' flex justify-center self-center w-9/12 py-10 '>
          <div className='w-64pl-5 mx-20'>
            <p className='font-bold text-2xl text-lime-600'>UCode University</p>
            <p>123, Paghanapin Street </p>
            <p>  Talamak Village Tondo, Manila</p>
            <br />
            <p>Phone: +1 5589 55488 55</p>
            <p>Email: info@example.com</p>
          </div>

          <div className=' flex flex-col w-64 pl-24 mx-20'>
              <p className='font-bold text-lg text-lime-600'>Useful Links</p>    
              <Link href="/"><span>Home</span></Link>
              <Link href="/about"><span>About</span></Link>
              <Link href="/contact"><span>Contact Us</span></Link>
            
                
              </div>

          <div className='w-64 pl-9 mx-20'>
            <p className='font-bold text-lg text-lime-600'>Our Services</p>
            <p>Onsite Consultation</p>
            <p>Patient Education</p>
            <p>Electronic Health Record</p>
          </div>
        </div>
      <div  className='bg-green-700 flex py-5 justify-between px-16'>
        <div>
          <p>© Copyright <strong> WD University </strong>- All Rights Reserved</p>
        </div>
        <div className='flex'>
            <p>facebook</p>
            <p>Instagram</p>
            <p>Tweeter</p>
            <p>Linkdin</p>
        </div>
      </div>
 
    </div>
  )
}

export default Footer