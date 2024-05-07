import React from 'react'
import { facebookLogo } from '@/lib/utils'
import LoginForm from './LoginForm'
import SignUpModal from './SignUpModal'
const Login = () => {
  return (
    <main className="relative w-full bg-gray-100 min-h-screen flex items-center ">
      <div className="mx-auto w-full md:w-9/12 lg:w-8/12 p-4  ">
        <div className="w-full h-full grid md:grid-cols-2 md:gap-4 md:-translate-y-10">
          <section className="leftSection flex flex-col  ">
            <img
              src={facebookLogo}
              alt="facebook Logo"
              height={108}
              className="h-[108px] sm:self-start max-sm:h-[96px]"
            />
            <h2 className="md:px-6 px-2 max-md:text-center max-sm:text-lg dark:text-primary-light text-primary-dark ">
              Facebook helps you connect and share with the people in your life.
            </h2>
          </section>
          <section className="rightSection">
            <div className="w-full sm:w-11/12 mx-auto max-w-[28rem] my-4 shadow-md bg-white rounded-md p-4 flex flex-col items-center  ">
              <div className="border-b w-full ">
                <LoginForm />
               

                <div className="relative text-blue-500 text-center text-sm my-4 cursor-not-allowed hover:underline ">
                  Forgotten password?{" "}
                </div>
                
                
              </div>

            <SignUpModal/>
              
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Login