import Link from 'next/link'
import React from 'react'

const PatientQueueing = () => {
  return (
    <div className='mx-auto'>
      <div className='flex'>
        <p>Patient is non-existent on our clinic database</p>
        <Link href="#" className='pl-20'> <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 shadow-lg shadow-green-500/50  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Add to Database</button></Link>
       
      </div>
      <div className='flex'>
        <p> No admitted patient at the moment...</p>
        <Link href="#" className='pl-20'> <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300  shadow-lg shadow-green-500/50  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Admit a Patient</button></Link>
      </div>

    <div>
    <div class="patient-queue bg-white rounded-lg shadow">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Register now or see the Principal
              </h1>
              <form class="space-y-6 md:space-y-6" action="#">
                <div className='flex justify-between'>
                <div id="leftsyd">
                  <div>
                      <label for="idnumber" class="block mb-2 text-sm font-medium text-gray-900 ">Your ID Number</label>
                      <input type="text" name="idnumber" id="idnumber" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      " placeholder="ID Number" required=""/>
                  </div>
                  <div>
                      <label for="firstName" class="block mb-2 text-sm font-medium text-gray-900 ">Your First Name</label>
                      <input type="text" name="firstName" id="firstName" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      " placeholder="First Name" required=""/>
                  </div>
                  <div>
                      <label for="lastName" class="block mb-2 text-sm font-medium text-gray-900 ">Your Last Name</label>
                      <input type="text" name="lastName" id="lastName" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      " placeholder="Last Name" required=""/>
                  </div>
                </div>
                <div id="rightsyd">
                  <div>
                      <label for="department" class="block mb-2 text-sm font-medium text-gray-900 ">Your department</label>
                      <input type="text" name="department" id="department" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      " placeholder="department" required=""/>
                  </div>
                  <div>
                      <label for="course" class="block mb-2 text-sm font-medium text-gray-900 ">Your Course / Position</label>
                      <input type="text" name="course" id="course" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      " placeholder="Course / Position " required=""/>
                  </div>
                  <div>
                      <label for="yearlevel" class="block mb-2 text-sm font-medium text-gray-900 ">Your year level</label>
                      <input type="text" name="yearlevel" id="yearlevel" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      " placeholder="Year Level" required=""/>
                  </div>
                </div>
                </div>
                  <div>
                      <label for="symptom" class="block mb-2 text-sm font-medium text-gray-900 ">Sypmtom</label>
                      <input type="text" name="symptom" id="symptom" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      " placeholder="Symptom" required=""/>
                  </div>
                
                 
                  
                  {/* <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button> */}

                 <br />
                 <Link href="#"> <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300  shadow-lg shadow-green-500/50  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Admit Patient</button></Link>

                 
              </form>
          </div>
      </div>


    </div>

    </div>
  )
}

export default PatientQueueing