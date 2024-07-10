import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import PagerView from 'react-native-pager-view'
import SplashScreen from './screens/SplashScreen'
import SplashScreen1 from './screens/SplashScreen1'

const OnBoarding = () => {
  return (
    <PagerView>
        <SplashScreen key='1' />
        <SplashScreen1 key='2' />
    </PagerView>
  )
}

export default OnBoarding