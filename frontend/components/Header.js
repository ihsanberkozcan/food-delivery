import React from 'react'
import Link from 'next/link'
export const Header = () => {
  return (


    <nav className="bg-white w-full shadow-xl">
      <div className="flex items-center w-full  py-6 mb-10  px-5  md:px-20">

        <div className="flex justify-between items-center">
          <Link href="/">
            <a href="#" className="font-bold text-2xl text-indigo-600">Yummy</a>
          </Link>

        </div>

        <div className="flex flex-row ml-auto mt-3 mt-0" id="navbar-collapse">
          <Link href="/login">
            <a href="#" className="p-2 mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">Login</a>

          </Link>
          <Link href="/register">

            <a href="#" className="p-2 mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Signup</a>
          </Link>
        </div>
      </div>
    </nav>

  )
}
