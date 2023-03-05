import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const LoginModal = () => {
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
        <div className='login-details px-[3rem] py-[3rem]'>
          <h1 className='m-0 font-extrabold align-middle text-center'>
            KIWI WEATHER
          </h1>
          <form action='' className='flex flex-col py-4'>
            <h2 className='text-center text-xl pb-2 font-semibold'>Login</h2>
            <input
              type='email'
              name='email'
              id='email'
              className='border-[#44413cac] border-2 px-4 py-3 my-1 rounded-md'
              placeholder='Email'
            />
            <input
              type='password'
              name='pass'
              id='pass'
              className='border-[#44413cac] border-2 px-4 py-3 my-1 rounded-md'
              placeholder='Password'
            />
            <a className='text-right headline opacity-70 pt-2'>
              Forgot password?
            </a>
            <div className='flex justify-center py-4'>
              <button className='font-semibold px-4 py-3 mr-2 w-full rounded-sm border-2 border-[#44413C] text-[#44413C] opacity-75 flex items-center'>
                <FcGoogle className='text-xl' />
                <span className='px-2'>Google login</span>
              </button>
              <button className='font-semibold px-4 py-3 w-full rounded-sm bg-[#44413C] text-[#F5F2EB] '>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
