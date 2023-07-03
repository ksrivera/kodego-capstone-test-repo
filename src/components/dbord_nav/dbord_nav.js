import Link from 'next/link'
import React from 'react'

const Dbord_Nav = () => {
  return (
    <div>
        <div className="flex justify-end pt-4 pb-4 bg-gray-300">
        <Link href="/" className="pr-20">
          <button
            type="button"
            class="text-white bg-gradient-to-r bg-green-400 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 transition duration-300 ease-in-out font-medium rounded-2xl text-xl px-5 py-2.5 text-center mr-2 mb-2 mt-2"
          >
            Sign-out
          </button>
        </Link>
      </div>

    </div>
  )
}

export default Dbord_Nav