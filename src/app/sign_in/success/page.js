import React from 'react'
import Link from 'next/link'

const Success = () => {
  return (
    <div>

<section class="bg-gray-50 ">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8 text-gray-900">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Signing-up Successful!
              </h1>
              <p>Please check your email for confirmation</p>
              <p>Thank you!</p>
              <div class="space-y-4 md:space-y-6" action="#">
              <Link href="/"> <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300  shadow-lg shadow-green-500/50  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Done</button></Link>

                

                  
              </div>
          </div>
      </div>
  </div>
</section>

    </div>
  )
}

export default Success