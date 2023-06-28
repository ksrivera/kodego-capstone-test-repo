import Link from 'next/link'
import React from 'react'

const Patient_queue = () => {
  return (
    <div className='mx-auto p-20'>
        
        <div className='flex '>
      <p> No admitted patient at the moment...</p>
      <Link href="/dashboard/add_patient" className='pl-20'> <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300  shadow-lg shadow-green-500/50  font-medium rounded-2xl px-5 py-2.5 text-center text-xl mr-2 mb-2">Start Admission</button></Link>
    </div>
    
    </div>
  )
}

export default Patient_queue