import React from 'react';
import logo from '../assets/logo.svg';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer flex justify-between mt-9 mx-[5rem] w-[100%] px-[5rem] py-[2rem] min-h-[10rem] bg-[#44413C] text-[#f5f2eba4]'>
      <div className='left h-[100%] flex flex-col justify-between items-start'>
        <img src={logo} className='invert-[1] h-[2rem] saturate-0' alt='' />
        <div className='social--links flex justify-start py-[2rem] text-4xl '>
          <FaTwitterSquare className='mr-4' />
          <FaLinkedin className='mr-4' />
          <FaFacebookSquare className='mr-4' />
          <FaInstagramSquare className='mr-4' />
        </div>
      </div>
      <div className='right flex'>
        <ul className='flex flex-col h-[100%]'>
          <a href='' className='px-2 pb-2 text-xl'>
            Menu
          </a>
          <a href='/' className='px-2 py-1 text-base opacity-50'>
            Home
          </a>
          <a href='/' className='px-2 py-1 text-base opacity-50'>
            News
          </a>
          <a href='/' className='px-2 py-1 text-base opacity-50'>
            About
          </a>
          <a href='/' className='px-2 py-1 text-base opacity-50'>
            Weather
          </a>
        </ul>
        <ul className='max-w-[15rem] mx-[3rem]'>
          <h2 className='text-xl pb-4'>Contact me</h2>
          <p className='text-base opacity-50'>
            Hello, I'm{' '}
            <span className='opacity-100 headline hover:text-[#F5F2EB]'>
              Vinay Kishore
            </span>{' '}
            a 3rd year CS Student with a keen interest in web development.
            <p className='headline hover:opacity-100 hover:text-[#F5F2EB]'>
              Reach out to me here 👈
            </p>
          </p>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;