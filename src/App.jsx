import { useEffect, useState } from 'react'
import Header from './components/Header'
import HomeSection from './components/HomeSection'
import Footer from './components/Footer'
import axios from 'axios'
import { getWeather } from './utils/getWeather'
import LoginModal from './components/LoginModal'
import {
  createBrowserRouter,
  RouterProvider,
  useLocation
} from 'react-router-dom'
import About from './components/Profile'
import Profile from './components/Profile'

let url = 'http://localhost:3001/updates/Hyderabad'

async function getData (city) {
  console.log('Calling get Data')
  let data = await axios({ method: 'get', url })
  return data.data
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppPrev />
  },
  {
    path: '/profile',
    element: <AppPrev />
  }
])

function App () {
  return <RouterProvider router={router} />
}

function AppPrev () {
  let [city, setCity] = useState({ city: 'Hyderabad' })
  let [data, setData] = useState({})
  let [modal, setModal] = useState(1)
  let presPath = useLocation()

  console.log('1')
  console.log(location)
  console.log('2')
  useEffect(() => {
    const loader = async () => {
      let value = await getData(city)
      localStorage.setItem('dataResponse', JSON.stringify(value))
    }
    loader()
  }, [])

  return (
    <div className='flex flex-col items-center justify-between min-h-[100vh]'>
      {modal ? <LoginModal /> : ''}
      <Header></Header>
      {presPath.pathname === '/profile' ? <Profile /> : ''}
      {console.log(presPath.pathname)}
      {presPath.pathname === '/' ? <HomeSection /> : ''}
      <Footer className='max-w-[1240px]'></Footer>
    </div>
  )
}

export default App
