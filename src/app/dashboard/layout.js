import React from 'react'
import Link from 'next/link'
import './globals.css'
import Dbord_Nav from '../component/dbord_nav/dbord_nav';
import Dbord_header from '../component/dbord_header/dbord_header';
import Footer from '../component/footer/footer';
import Dbord_sidebar from '../component/dbord_sidebar/dbord_sidebar';



const DashboardLayout = ({children}) => {
  return (
    <div>
    <div id="sidebarandchildren" className="flex flex-row">
      <div className='w-1/6 '>
          <Dbord_sidebar/>
      </div>
      <div className='w-5/6'>
          <Dbord_Nav/>
          <Dbord_header/>  
              {children}
          <Footer/>
      </div> 
      </div>
    </div>
  );
}

export default DashboardLayout