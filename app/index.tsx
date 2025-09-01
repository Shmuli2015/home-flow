import { router } from 'expo-router'
import { View, Text } from 'react-native'
import { useEffect, useState } from 'react'
import SplashScreen from '@/components/SplashScreen'
import Welcome from '@/components/welcome'

const Index = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true)
    }, 2000)
  }, [])

  if (!isReady) {
    return <SplashScreen />
  }

  return (
    <Welcome />
  )
}

export default Index