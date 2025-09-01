import { router } from 'expo-router'
import { View, Text } from 'react-native'
import { useEffect, useState } from 'react'
import SplashScreen from '@/components/SplashScreen'

const Index = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true)
      router.push('/welcome')
    }, 2000)
  }, [])

  if (!isReady) {
    return <SplashScreen />
  }

  return (
    <View>
      <Text>Index</Text>
    </View>
  )
}

export default Index