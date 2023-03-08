// Importing required libraries
import { useEffect, useState } from 'react'
import Header from './components/Header'
import HomeSection from './components/HomeSection'
import Footer from './components/Footer'
import axios from 'axios'
import LoginModal from './components/LoginModal'
import {
  createBrowserRouter,
  RouterProvider,
  useLocation
} from 'react-router-dom'
import Profile from './components/Profile'
import { auth } from './utils/auth'
import { } from 'firebase/auth'

let url = 'http://localhost:3001/updates/Hyderabad'

// Function to get updates of a city
async function getData (city) {
  let token = await auth.currentUser.getIdToken()
  let data = await axios({
    method: 'get',
    url,
    headers: {
      authentication: `Bearer ${token}`
    }
  })
  console.log(data)
  return data.data
}

// Routing the whole page
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

// Main APP component which loads the Previous component
function App () {
  return <RouterProvider router={router} />
}

// Component to be passed to root component
function AppPrev () {
  // Use states
  let [city, setCity] = useState({ city: 'Hyderabad' })
  let [user, setUser] = useState(0)
  let [modal, setModal] = useState(1)
  let presPath = useLocation()

  // This function runs when the component is mounted and there is a change in user
  useEffect(() => {
    console.log('User has logged in!!!')
    const loader = async () => {
      let value = await getData(city)
      localStorage.setItem('dataResponse', JSON.stringify(value))
    }
    loader()
  }, [user])

  // We return this jsx object
  return (
    <div className='flex flex-col items-center justify-between min-h-[100vh]'>
      {modal ? (
        <LoginModal user={{ user, setUser }} modal={{ modal, setModal }} />
      ) : (
        ''
      )}
      <Header></Header>
      {presPath.pathname === '/profile' ? <Profile /> : ''}
      {presPath.pathname === '/' ? <HomeSection /> : ''}
      <Footer className='max-w-[1240px]'></Footer>
    </div>
  )
}

export default App
