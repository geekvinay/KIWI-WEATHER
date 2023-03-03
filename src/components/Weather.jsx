import React, { useEffect, useState } from 'react';
import svg from '../assets/rain-svg.svg';

const weather = ({ weather }) => {
  const [weatherDetails, setDetails] = useState({
    city: weather.city,
    temperature: weather.temperature,
    date: weather.date,
    time: weather.time,
    forecast: weather.forecast,
  });

  useEffect(() => {
    (() => {
      setDetails(weather);
    })();
  });

  return (
    <div className='weather px-4 pt-6 pb-4 rounded-lg m-[1rem] box-border'>
      {/* <span className='flex justify-between font-semibold text-gray-500'>
        <span>{weatherDetails.date}</span>
        <span>{weatherDetails.time}</span>
      </span>
      <div className='weather--wrapper'>
        <div className='left'>
          <img src={svg} alt='' className='w-[100%] object-cover' />
          <h1 className='forecast text-xl font-bold text-center'>
            {weatherDetails.forecast}
          </h1>
        </div>
        <div className='right'>
          <span>
            <h2 className='temperature font-black text-[5rem] text-left font-sans'>
              {weatherDetails.temperature}
            </h2>
            <h1 className='text-4xl font-bold text-center'>
              {weatherDetails.city}
            </h1>
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default weather;
