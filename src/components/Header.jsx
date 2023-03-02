import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
  return (
    <div className='min-h-[80px] w-[100vw] px-[5rem] bg-gray-200 flex justify-between items-center'>
      <a href='/' className='font-sans font-bold text-3xl mr-[auto]'>
        KIWI
      </a>
      <div className='list-none flex font-sans font-semibold text-xl uppercase'>
        <li className='px-[1rem] cursor-pointer'>About </li>
        <li className='px-[1rem] cursor-pointer'>Home</li>
        <li className='px-[1rem] cursor-pointer'>Help</li>
      </div>
      <AiOutlineMenu className='text-2xl ml-4 cursor-pointer' />
    </div>
  );
};

export default Header;
