import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBbLII28LSbOU5l_Bz3JMgSuBWAsyuYn04',
  authDomain: 'kiwi---weather-app.firebaseapp.com',
  projectId: 'kiwi---weather-app',
  storageBucket: 'kiwi---weather-app.appspot.com',
  messagingSenderId: '544896129238',
  appId: '1:544896129238:web:95a4eabea1005e17ee9177'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }
