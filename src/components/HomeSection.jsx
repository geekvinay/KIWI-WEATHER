import React from 'react'
import News from './News'
import Weather from './Weather'
import { useState, useEffect } from 'react'

const HomeSection = props => {
  let [weather, setWeather] = useState({})
  let [data, setData] = useState({})

  useEffect(() => {
    data = localStorage.getItem('dataResponse')
    weather = data.weather
  }, [])

  return (
    <div className='hero--section max-w-[1240px]'>
      <News />
      <Weather weather={weather} />
    </div>
  )
}

export default HomeSection
