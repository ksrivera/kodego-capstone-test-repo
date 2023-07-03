'use client'

import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'




export default function Home() {
          useEffect(() => {
            AOS.init({
                offset: 400,
                duration: 1500});
            },[]);

  return (
    <main className="main   bg-neutral-50 ">
      <div className='hero flex items-start'>
        <div className="hero-desc pl-60 pt-80" data-aos="zoom-in" data-aos-delay="100">
          <p className="font-bold text-7xl text-teal-800">How are you</p> 
          <p className="font-bold pt-3 text-7xl text-teal-800">feeling today?</p>
          <p className="text-2xl pt-6 pb-10 text-teal-900">Know more about taking good care of your body </p>
          <span id="hero-butn" className="text-white text-xl rounded-3xl px-4 py-2 mx-4 bg-green-600 hover:bg-green-500">Click Here</span>
        </div>
      </div>



    </main>
  )
}
