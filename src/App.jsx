import { useEffect, useState } from 'react';
import Header from './components/Header';
import Weather from './components/Weather';
import News from './components/News';
import Footer from './components/Footer';
import axios from 'axios';
import { getWeather } from './utils/getWeather';
import LoginModal from './components/LoginModal';

let url = 'http://localhost:3001/updates/Hyderabad';

async function getData(city) {
  console.log('Calling get Data');
  let data = await axios({ method: 'get', url });
  return data.data;
}

function App() {
  let [data, setData] = useState({});
  let [city, setCity] = useState({ city: 'Hyderabad' });
  let [weather, setWeather] = useState({});
  let [modal, setModal] = useState(1);

  useEffect(() => {
    const loader = async () => {
      let value = await getData(city);
      localStorage.setItem('dataResponse', JSON.stringify(value));
      setWeather(getWeather());
    };
    loader();
  }, []);
  return (
    <div className='flex flex-col items-center justify-start'>
      {modal ? <LoginModal /> : ''}
      <Header></Header>
      <div className='hero--section'>
        <News></News>
        <Weather weather={weather}></Weather>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
