import React from 'react'
import './globals.css'
import Flwbt_nav from '../../../components/flwbt_nav/flwbt_nav';
import Flwbt_sidebar from '../../../components/flwbt_sidebar/flwbt_sidebar';




const DashboardLayout = ({children}) => {
  return (
    <>
    <body className=' bg-emerald-300'>
      
    
    <Flwbt_nav/>
    
    <Flwbt_sidebar/>
    <div className=''>
      
    {children}

    </div>
    </body>
    </>
  );
}

export default DashboardLayout