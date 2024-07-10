import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { hs, ms, vs } from './Metrics'

const HomePage = () => {
  return (
    <View style={StyleSheet.bg} >
      <Text style={Styles.head} >9MATH</Text>
    </View>
  )
}

export default HomePage

const Styles = StyleSheet.create({
  bg:{
    height:vs(812),
    width:hs(375)
  },
  head:{
    textAlign:'center',
    fontSize:ms(21),
    marginTop:vs(10),
    color:'#f66b0e'
  }
})