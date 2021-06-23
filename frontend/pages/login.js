import React from 'react'
import { Header } from '../components/Header'
import Head from 'next/head'
import { MailIcon } from '@heroicons/react/solid'
import { KeyIcon } from '@heroicons/react/solid'
import { EyeIcon } from '@heroicons/react/outline'
export default function Login() {
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <Header />

            <div className="flex h-screen -mt-20 w-full h-full">
                <div className="m-auto w-full lg:w-2/5 p-auto">
                    <h1 className=" text-2xl  font-normal text-center mb-3">Log in</h1>

                    <div className="mb-7">
                        <label class="block text-lg font-light mb-2" for="username">Username</label>
                        <div className="flex w-full bg-drabya-gray items-center border-gray-500 appearance-none border p-4 font-light leading-tight rounded bg-white">
                            <MailIcon className="h-5 w-5 " />
                            <input className="ml-3 w-full focus:outline-none focus:shadow-outline" type="text" name="username" id="" placeholder="Username" />
                        </div>
                    </div>
                    <div className="mb-7">
                        <label className="block text-lg font-light mb-2" for="password">Password</label>
                        <div className="flex w-full bg-drabya-gray items-center border-gray-500 appearance-none border p-4 font-light leading-tight rounded bg-white">
                            <KeyIcon className="h-5 w-5 " />
                            <input className="ml-3 w-full focus:outline-none focus:shadow-outline" type="password" name="password" id="" placeholder="Password" />
                            <EyeIcon className="h-5 w-5 text-gray-500" />
                        </div>
                    </div>

                    <div class="flex items-center justify-between mb-6">
                        <a class="inline-block align-baseline font-light text-sm text-indigo-600 hover:text-indigo-500" href="#">
                            Forgot Password?
                        </a>
                        <button class=" bg-indigo-600 hover:bg-blue-700 text-white font-light py-3 px-20 rounded focus:outline-none focus:shadow-outline" type="button">
                            LOGIN
                        </button>
                    </div>
                    <p class="text-center text-md font-light">Don't have an account?
                        <a class="font-light text-md text-indigo-600"> Create account</a>
                    </p>


                </div>

            </div>
        </>


    )
}
