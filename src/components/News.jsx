import React from 'react';
import NewsArticle from './NewsArticle';
import { FaCalendarAlt, FaPenNib } from 'react-icons/fa';

const news = () => {
  return (
    <div className='w-[100%] min-h-[100vh] px-4 pt-8 border-r-[rgba(68,65,60,0.33)]'>
      {/* Main Headline */}
      <article className='main-headline'>
        <h1 className='headline text-2xl p-4 font-bold border-2 border-[rgba(68,65,60,0.33)]'>
          IIT Hyderabad (EE) Placements: Highest package, average CTC, top
          recruiters and mores
        </h1>
        <div className='img--container cursor-pointer'>
          <img
            src='https://images.indianexpress.com/2023/02/IIT-Hyderabad-1.jpg'
            alt=''
          />
        </div>
        <div className='article--details text-sm py-2 flex justify-start opacity-50'>
          <div className='wrapper flex px-2 items-center'>
            <FaCalendarAlt />
            <span className='px-2'>13th March 2023</span>
          </div>
          <div className='wrapper flex px-2 items-center'>
            <FaPenNib />
            <span className='author px-2'>A Vinay Kishore</span>
          </div>
        </div>
        <p className='description opacity-80 headline py-2'>
          IIT-Hyderabad is one of the renowned engineering colleges in India.
          Check their average and highest placement offers for electrical
          engineering in the last five years.
        </p>
      </article>

      <hr className='w-[100%] border border-1 my-4 rounded-xl border-[rgba(68,65,60,0.33)]'></hr>

      {/* Other News object */}
      <NewsArticle />
      <NewsArticle />
      <NewsArticle />
      <NewsArticle />
    </div>
  );
};

export default news;
