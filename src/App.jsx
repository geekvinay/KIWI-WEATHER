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
import { auth } from './utils/auth'

let url = 'http://localhost:3001/updates/Hyderabad'

async function getData (city) {
  if (auth.currentUser) {
    token = await auth.currentUser.getIdToken()
    console.log(token)
    let data = await axios.get({
      url,
      header: {
        authentication: `Bearer ${token}`
      }
    })
    return data.data
  }
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
  let [user, setUser] = useState({})
  let [modal, setModal] = useState(1)
  let presPath = useLocation()

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
      {presPath.pathname === '/' ? <HomeSection /> : ''}
      <Footer className='max-w-[1240px]'></Footer>
    </div>
  )
}

export default App
