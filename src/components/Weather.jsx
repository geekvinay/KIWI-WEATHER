import React, { useEffect, useState } from 'react'
import ReactAnimatedWeather from 'react-animated-weather'

const dataJSON = localStorage.getItem('dataResponse')


const availIcons = [
  'CLEAR_DAY',
  'CLEAR_NIGHT',
  'PARTLY_CLOUDY_DAY',
  'PARTLY_CLOUDY_NIGHT',
  'CLOUDY',
  'RAIN',
  'SLEET',
  'SNOW',
  'WIND',
  'FOG'
]

const defaults = {
  icon: 'RAIN',
  color: 'black',
  size: 80,
  animate: true
}


const Weather = ({ weather }) => {
  const [weatherDetails, setDetails] = useState({
    city: weather.city,
    temperature: weather.temperature,
    date: weather.date,
    time: weather.time,
    forecast: weather.forecast,
  })

  useEffect(() => {
    ;(() => {
      setDetails(weather)
    })()
  })

  return (
    <div className='weather px-4 py-[3rem] '>
      <div className='main--weather px-4 py-4 grid grid-cols-3 grid-rows-1 items-center border-2 border-[rgba(68,65,60,0.33)] min-h-[10rem]'>
        <div className='details col-start-1 col-end-3 flex flex-col justify-start'>
          <p className='location opacity-90'>Hyderabad, India</p>
          <h1 className='font-bold text-6xl m-0 py-2'>30°C</h1>
          <h2 className='font-semibold text-2xl opacity-70'>Rainy</h2>
        </div>
        <ReactAnimatedWeather
          icon={defaults.icon}
          color={defaults.color}
          size={defaults.size}
          animate={defaults.animate}
        />
      </div>
      <div className='second--weather my-4 px-4 py-4 border-2 border-[rgba(68,65,60,0.33)] min-h-[10rem] flex flex-col'>
        <div className='details h-[100%] w-[100%] grid grid-cols-4 grid-rows-4'>
          <p className='label py-2 col-start-1 col-end-4'>Max Temperature</p>
          <p className='value py-2 px-4 justify-self-end'>32°C</p>
          <p className='label py-2 col-start-1 col-end-4'>Min Temperature</p>
          <p className='value py-2 px-4 justify-self-end'>26°C</p>
          <p className='label py-2 col-start-1 col-end-4'>Pressure</p>
          <p className='value py-2 px-4 justify-self-end'>1019</p>
          <p className='label py-2 col-start-1 col-end-4'>humidity</p>
          <p className='value py-2 px-4 justify-self-end'>26</p>
        </div>
      </div>
    </div>
  )
}

export default Weather
