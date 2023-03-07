import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import img from '../assets/logo.svg'
import phone from '../assets/phone.svg'
import { auth, provider } from '../utils/auth'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const Header = props => {
  const [user, setUser] = useState(0)

  const auth = getAuth()
  onAuthStateChanged(auth, user => {
    if (user) {
      user = user.displayName
    }
  })

  return (
    <div className='header max-w-[1240px] w-[100vw] min-h-[10rem] flex flex-col'>
      <section className='topSection flex flex-row py-[3rem] px-[5rem] justify-between'>
        <article className='h-[80%] leftSection list-none flex items-center'>
          <img src={phone} className='h-[3rem] pr-5 opacity-[60%]' alt='' />
          <article className='h-[100%] flex flex-col justify-evenly  font-semibold color--secondary'>
            <li>+81-830-9999-640</li>
            <li>info@gmail.com</li>
          </article>
        </article>
        <img
          src={img}
          className='cursor-pointer self-center justify-self-center'
          alt=''
        />
        <article className='rightSection h-[100%] list-none color--secondary py-2 flex flex-col justify-evenly font-semibold'>
          {!user && !props.user ? (
            <li
              className='uppercase flex items-center text-[#F5F2EB] bg-[#44413C] px-4 py-2 rounded-sm cursor-pointer'
              onClick={async () => {
                const result = await signInWithPopup(auth, provider)
                const credential =
                  GoogleAuthProvider.credentialFromResult(result)
                const token = credential.accessToken
                const user = result.user
                setUser(user.displayName)
              }}
            >
              <FaSearch className='text-1xl' />
              <span className='px-4 text-1xl'>Sign In</span>
            </li>
          ) : (
            <li className='uppercase flex items-center'>
              <span className='px-4 text-1xl'>{user}</span>
            </li>
          )}
        </article>
      </section>
      <div className='mx-[5rem] h-[3rem] relative section--middleSection flex flex-col items-center justify-between'>
        <hr className='w-[100%] border border-1 rounded-xl border-[rgba(68,65,60,0.33)]'></hr>
        <div className='date px-[5rem] py-[1rem] bg-[#F5F2EB] absolute -top-[50%] font-semibold '>
          Hyderabad, March 13, 2023
        </div>
      </div>
      <div className='navbar bg-[#44413C] text-[#F5F2EB] font-semibold mx-[5rem] py-4 flex justify-evenly list-none'>
        <li className='cursor-pointer active'>Hyderabad</li>
        <li className='cursor-pointer'>Sports</li>
        <li className='cursor-pointer'>Politics</li>
        <li className='cursor-pointer'>International</li>
        <li className='cursor-pointer'>Economy</li>
        <li className='cursor-pointer'>Latest</li>
      </div>
    </div>
  )
}

export default Header
