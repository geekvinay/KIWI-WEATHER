import React from 'react'
import logo from '../assets/logo.svg'

const LoadingScreen = () => {
  return (
    <div className='w-[100vw] h-[100vh] z-40 flex justify-center items-center'>
      <div className='innerDiv'>
        <img src={logo} alt='' className='h-[10vh] ' />
        <h1 className='text-center text-black font-extrabold opacity-70 animate-pulse'>
          Loading
        </h1>
      </div>
    </div>
  )
}

export { LoadingScreen }
