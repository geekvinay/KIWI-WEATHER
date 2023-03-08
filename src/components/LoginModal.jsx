// Importing the packages
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { auth, provider } from '../utils/auth'
import { signInWithPopup } from 'firebase/auth'

// Login modal component
const LoginModal = ({ user, modal }) => {
  return (
    <div className='backgroundModal flex items-center justify-center w-screen h-screen sticky top-0 z-10 backdrop-blur-sm bg-[#000000da]'>
      <div className='modal z-20 bg-[#F5F2EB] h-[80vh] w-[80vw] opacity-[100%] grid grid-cols-2 grid-rows-1'>
        <div className='img--container cursor-pointer'>
          <img
            src='https://images.indianexpress.com/2023/02/IIT-Hyderabad-1.jpg'
            alt=''
            className='h-full w-full object-cover'
          />
        </div>
        <div className='login-details h-full px-[3rem] py-[3rem]'>
          <h1 className='m-0 font-extrabold align-middle text-center'>
            KIWI WEATHER
          </h1>
          <form action='' className='h-full flex flex-col py-4 justify-around'>
            <h2 className='text-center text-3xl pb-2 font-semibold'>Login</h2>
            <div className='wrapper-btns flex flex-col justify-between'>
              <input
                type='email'
                name='email'
                id='email'
                className='border-[#44413cac] border-2 px-4 py-3 my-2 rounded-md'
                placeholder='Email'
              />
              <input
                type='password'
                name='pass'
                id='pass'
                className='border-[#44413cac] border-2 px-4 py-3 my-2 rounded-md'
                placeholder='Password'
              />
            </div>
            <a className='text-right headline opacity-70 pt-2'>
              Forgot password?
            </a>
            <div className='flex justify-self-end justify-center py-4'>
              <button
                className='font-semibold px-4 py-3 mr-2 w-full rounded-sm border-2 border-[#44413C] text-[#44413C] opacity-75 flex items-center'
                // This function is called when google auth is clicked
                onClick={async e => {
                  e.preventDefault()
                  console.log('Calling google Auth')
                  await signInWithPopup(auth, provider)
                  console.log('Setting modal to 0 and user to 1')
                  modal.setModal(0)
                  user.setUser(1)
                }}
              >
                <FcGoogle className='text-xl' />
                <span className='px-2'>Google login</span>
              </button>
              <button
                className='font-semibold px-4 py-3 w-full rounded-sm bg-[#44413C] text-[#F5F2EB] '
                onClick={() => {
                  alert(
                    'OOPS !!!\nThis Login feature is still under development\n\nPlease use google login for now...!'
                  )
                }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
