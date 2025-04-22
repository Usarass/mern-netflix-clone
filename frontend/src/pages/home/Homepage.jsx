import React from 'react'

import HomeScreen from './HomeScreen.jsx'
import AuthScreen from './AuthScreen.jsx'
import { useAuthStore } from '../../store/authUser.js';

const Homepage = () => {
  const { user } = useAuthStore();

  return (
    <div>
      {user ? <HomeScreen /> : <AuthScreen />}
    </div>
  )
}

export default Homepage
