import React from 'react'

const Dbord_header = () => {
  return (
    <div>
          <header className="header flex items-center justify-end  py-8">
        <div className="subhead mr-20 w-80 z-10">
          <p className="welcome text-6xl font-semibold">
            Welcome to Admin Dashboard!
          </p>
        </div>
        <div className="bandaide flex items-center text-left justify-end bg-slate-50 rounded-full px-24 ">
          <div className="pt-4">
            <p className="hello text-5xl font-semibold">Hello, Admin Inoue!</p>
            <p className="life text-2xl pt-2">
              "Save one life, you're a hero.
            </p>
            <p className="text-2xl">
              "Save 100 lives, you're a nurse"
            </p>
          </div>
          <div className="admin-img rounded-3xl h-56 mx-8 my-2">
            <img
              src="/picture/orihime.jpg"
              width="153"
              alt="nothing yet"
              className=" rounded-xl"
            />
          </div>
        </div>
      </header>

    </div>
  )
}

export default Dbord_header