import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { hs, vs } from './Metrics'
import {useFonts} from 'expo-font'

const SplashScreen= ()=> {
    useFonts({Work:require('../assets/WorkSans.ttf')})
    
    return (
      <View style={Styles.bg} >
        <TouchableOpacity style={Styles.skp} >
        <Text> Skip </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={Styles.btn} >
            <Text>
                Get Started
            </Text>
        </TouchableOpacity> */}

      </View>
    )
  }
export default SplashScreen

const Styles = StyleSheet.create({
    bg:{
        backgroundColor:'#fafafa',
        height:'100%',
        width:'100%'
    },
    skp:{
        display:'flex',
        flexDirection:'row-reverse',
        right:hs(30),
        marginTop:vs(30)
    },
    btn:{
        backgroundColor:'#f66b0e',
        padding:20,
        width:hs(300),
        marginHorizontal:'auto',
        
    }

})