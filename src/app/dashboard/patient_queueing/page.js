import Link from 'next/link'
import React from 'react'

const PatientQueueing = () => {
  return (
    <div className='mx-auto flex flex-col items-center pt-6'>
      <p className='text-2xl font-semibold pb-4'>Patient Queue</p>
        <div id="border" className='border-8 border-double border-green-400 rounded-3xl p-5 shadow-lg shadow-green-500/50 mb-14'>
          <div className='flex justify-between pcard text-lg'>
            <p>Patient # 1</p>
            <p>Report Number: 1233456</p>
            <div className='flex flex-col'>
              <p>Date: June 25, 2023</p>
              <p>Time: 11:10 PM</p>
            </div>
          </div>
          <div className='flex justify-between items-end pcard text-lg'>  
            <div>
              <p><strong> Name :</strong> Ichigo Kurasaki</p>
              <p><strong>Course :</strong> Bachelor of Science in Information Technology</p>
              <p><strong>Symptom :</strong> Bruises / Skin Cut</p>
            </div>
            <Link href="/dashboard/consultation"> <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300  shadow-lg shadow-green-500/50  font-medium rounded-2xl text-xl px-5 py-2.5 text-center mr-2 mb-2">Start Consultation</button></Link>
          </div>
        </div>
      
        <div id="border" className='border-8 border-double border-green-400 rounded-3xl p-5 shadow-lg shadow-green-500/50 mb-14'>
          <div className='flex justify-between pcard text-lg '>
            <p>Patient # 2</p>
            <p>Report Number: 123123</p>
            <div className='flex flex-col'>
              <p>Date: June 25, 2023</p>
              <p>Time: 11:15 PM</p>
            </div>
          </div>
          <div className='flex justify-between items-end pcard text-lg'>  
            <div>
              <p><strong> Name :</strong> Zangetsu</p>
              <p><strong>Course :</strong> Bachelor of Science in Information Technology</p>
              <p><strong>Symptom :</strong> Burns</p>
            </div>
            <Link href="/dashboard/consultation"> <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300  shadow-lg shadow-green-500/50  font-medium rounded-2xl text-xl px-5 py-2.5 text-center mr-2 mb-2">Start Consultation</button></Link>
          </div>
        </div>
    </div>
  )
}

export default PatientQueueing