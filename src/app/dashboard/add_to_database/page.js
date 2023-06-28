import Link from 'next/link'
import React from 'react'

const AddToDatabase = () => {
  return (
    <div className='pt-10 mx-auto '>
        
        <div className='flex flex-row items-center pt-6'>
      <p className='pr-50 '>Patient is non-existent on our clinic database...&nbsp;&nbsp;&nbsp;&nbsp;</p>
      <Link href="/dashboard/add_patient"> <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300  shadow-lg shadow-green-500/50  font-medium rounded-2xl px-5 py-2.5 text-center text-xl mr-2 mb-2">Add to Database</button></Link>
    </div>
    
    </div>
  )
}

export default AddToDatabase