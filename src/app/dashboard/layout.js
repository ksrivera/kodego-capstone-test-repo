import React from 'react'
import Link from 'next/link'
import '../dashboard/dashboard.css'

const DashboardLayout = ({children}) => {
  return (
    <div>
    {/* =========Navbar========   */}
<div className='flex justify-end pt-4 pb-4 bg-gray-300'>



<Link href="/" className='pr-20'>
<button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 shadow-lg shadow-green-500/50 font-medium rounded-2xl text-xl px-5 py-2.5 text-center mr-2 mb-2 mt-2">Sign-out</button></Link>


</div>
    {/* =========Navbar End======= */}
   
    {/* =========Header============== */}

<header  className='header flex justify-end  py-8'>
  <div className='subhead mr-20 w-80 z-10'>
     <p className='welcome text-6xl font-semibold'>Welcome to Admin Dashboard!</p>
  </div>
  <div  className='bandaide flex justify-end bg-slate-50 rounded-full px-24 '>
    <div className='pt-8'>
      <p className='hello text-5xl font-semibold'>Hello, Admin Inoue!</p>
      <p className='life text-2xl pt-2'>"Save one life, you're a hero, Save 100 lives, you're a nurse"</p>
    </div>
    <div className='admin-img rounded-3xl h-56 mx-8 my-2'>
      <img src="/picture/orihime.jpg" width="153" alt="nothing yet" className=' rounded-xl'/>
    </div>
  </div>
</header>

    {/* =========Header End========== */}
{/* #############Sidebar and Children Section############# */}
<div id="sidebarandchildren" className='flex'>
    
    {/* =============Sidebar============== */}

<div id="sidebar" className='flex flex-col'>
  <div className='p-10'>
        <div>
        <Link href="/dashboard/add_patient"> <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300  shadow-lg shadow-green-500/50   font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2 text-xl w-52">Patient Queue</button></Link>
        </div>
        <div>
        <Link href="#"> <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300  shadow-lg shadow-green-500/50 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 w-52">Manage Database</button></Link>
        </div>
  </div>
</div>


    {/* =============Sidebar End+========= */}
    {/* =============Children============== */}

    {children}

    {/* =============Children End+========= */}
</div>
    {/* #######Sidebar and Children Section - End ########## */}
    
  

      <footer>
      <div className='bg-neutral-100 flex flex-col text-gray-900'>

        <div className=' flex justify-center self-center w-9/12 py-10 '>
          <div className='w-64pl-5 mx-20'>
            <p className='font-bold text-2xl text-lime-600'>UCode Clinic</p>
            <p>123, Paghanapin Street </p>
            <p>  Talamak Village Tondo, Manila</p>
            <br />
            <p>Phone: +1 5589 55488 55</p>
            <p>Email: info@example.com</p>
          </div>

          <div className=' flex flex-col w-64 pl-24 mx-20'>
              <p className='font-bold text-lg text-lime-600'>Useful Links</p>    
              <Link href="/"><span className=''>Home</span></Link>
              <Link href="/about"><span className=''>About</span></Link>
              <Link href="/contact"><span className=''>Contact Us</span></Link>
            
                
              </div>

          <div className='w-64 pl-9 mx-20'>
            <p className='font-bold text-lg text-lime-600'>Our Services</p>
            <p>Onsite Consultation</p>
            <p>Patient Education</p>
            <p>Electronic Health Record</p>
          </div>
        </div>
      <div  className='bg-green-700 flex py-5 justify-between items-center px-16'>
        <div>
          <p  className='text-lime-500'>© Copyright <strong> UCode Clinic </strong>- All Rights Reserved</p>
        </div>
        <div className='flex'>
        <Link href='http://www.facebook.com' className='ml-3 text-4xl '> 
            <svg  className='fill-lime-500' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg></Link>
            
            <Link href='http://www.instagram.com' className='ml-3 text-4xl '> <svg  className='fill-lime-500' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></Link>
            
            <Link href='http://www.twitter.com' className='ml-3 text-4xl '> <svg  className='fill-lime-500' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg></Link>
            
            <Link href='http://www.linkedin.com' className='ml-3 text-4xl '> <svg  className='fill-lime-500' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></Link>

        </div>
      </div>
 
    </div>

      </footer>
    </div>
  )
}

export default DashboardLayout