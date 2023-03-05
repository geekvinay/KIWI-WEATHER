import React from 'react';

const NewsArticle = () => {
  return (
    <div className='news--article smooth--transition my-4 grid grid-cols-4 grid-rows-1 px-2 py-4 border-2 border-transparent text-[#44413C] hover:border-2 hover:border-[rgba(68,65,60,0.33)]'>
      <div className='img--container cursor-pointer'>
        <img
          src='https://images.indianexpress.com/2023/02/IIT-Hyderabad-1.jpg'
          alt=''
        />
      </div>
      <div className='details col-start-2 col-end-5 px-4 flex flex-col'>
        <h2 className='headline smooth--transition font-semibold text-lg'>
          Lorem ipsum dolor sit amet dolor sit amet.
        </h2>
        <span className='headline smooth--transition opacity-60 text-sm hover:text-[#44413C]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nam
          hic aliquid? Rerum alias deleniti maxime fugiat explicabo quo
          voluptatum!
        </span>
      </div>
    </div>
  );
};

export default NewsArticle;
