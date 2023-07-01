import React from 'react'

const Dashboard = () => {
  
  return (
    <div className='w-full pb-96 mx-auto flex justify-end'>

        <div className="counter-section flex mr-56">
              <div className="counter-box flex flex-col p-5">
                <h2 className='text-3xl font-semibold'>Years in Operation</h2>
                <div className="counter bg-green-400 hover:bg-green-600 p-4 text-lg font-semibold text-center rounded-3xl">10</div>
              </div>
              
              <div className="counter-box flex flex-col p-5">
                <h2 className='text-3xl font-semibold'>Total Patients Served</h2>
                <div className="counter bg-green-400 hover:bg-green-600 p-4 text-lg font-semibold text-center rounded-3xl">5,240</div>
              </div>
              
              <div className="counter-box flex flex-col p-5">
                <h2 className=' text-3xl font-semibold'>No. of Staff</h2>
                <div className="counter bg-green-400 hover:bg-green-600 p-4 text-lg font-semibold text-center rounded-3xl">37</div>
              </div>
              
              <div className="counter-box flex flex-col p-5">
                <h2 className=' text-3xl font-semibold'>Patient Average Satisfactory Rate</h2>
                <div className="counter bg-green-400 hover:bg-green-600 p-4 text-lg font-semibold text-center rounded-3xl">78%</div>
              </div>
        </div>

     



        <p></p>
    </div>
  )
}

export default Dashboard