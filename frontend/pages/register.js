import React from 'react'
import { Header } from '../components/Header'
import Head from 'next/head'
export default function Register() {
    return (
        <>
            <Head>
                <title>Register</title>
                
            </Head>
            <Header />
            <div className="flex h-screen -mt-20 w-full h-full">
                <div className="m-auto w-full lg:w-2/5 p-auto">
                    <h1 className=" text-xl  font-normal text-center mb-3">Register</h1>

                    <div class="mb-7">
                        <label class="block text-lg font-light mb-2" for="username">Username</label>
                        <input class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline rounded" type="text" name="username" id="" placeholder="Username" />
                    </div>
                    <div class="mb-7">
                        <label class="block text-lg font-light mb-2" for="password">Password</label>
                        <input class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline rounded" type="password" name="password" id="" placeholder="Password" />
                    </div>
                    <div class="mb-10">
                        <label class="block text-lg font-light mb-2" for="password">Password</label>
                        <input class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline rounded" type="password" name="password" id="" placeholder="Password" />
                    </div>

                    <div class="flex items-center justify-between mb-7">

                        <button class=" bg-indigo-600 hover:bg-blue-700 text-white font-light py-4 px-10 w-full rounded focus:outline-none focus:shadow-outline" type="button">
                            Register
                        </button>
                    </div>
                    <p class="text-center text-md font-light">Do you have an account?
                        <a class="font-light text-md text-indigo-600"> Log ın </a>
                    </p>

                </div>
            </div>
        </>
      
    )
}
