import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import {useFonts} from 'expo-font'
import { hs, ms, vs } from './Metrics'

const SplashScreen= ({navigation})=> {




    useFonts({Work:require('../assets/WorkSans.ttf')})
    
    return (
      <View style={Styles.bg} >
        <TouchableOpacity style={Styles.skp} >
        <Text style={Styles.skpTxt} > Skip </Text>
        </TouchableOpacity>
        <View style={Styles.proto} >
            <Image style={Styles.protoImg} source={require('../assets/phone.png')}  />
        </View>
        <View style={Styles.blurr}  />

        <View>
            <Text style={Styles.mText} >
                All Your Number {'\n'}  Funtions in one Device
            </Text>
            <Text style={{textAlign:'center', top:vs(-50) }} >
                Best in number Calculation from binary to......
            </Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('HomePage')} style={Styles.btn} >
            <Text style={{color:'#white', textAlign:'center'}} >
                Get Started
            </Text>
        </TouchableOpacity>

      </View>
    )
  }
export default SplashScreen

const Styles = StyleSheet.create({
    bg:{
        backgroundColor:'#fafafa',
        height:vs(812),
        width:hs(375)
    },
    skp:{
        display:'flex',
        flexDirection:'row-reverse',
        right:hs(30),
        marginTop:vs(30),
  
    },
    skpTxt:{
        fontFamily:'Work',
        fontWeight:'bold',
        fontSize:ms(16)
    },
    proto:{
       // backgroundColor:'yellow',
        marginHorizontal:'auto'
    },
    protoImg:{
        marginHorizontal:'auto',
       // backgroundColor:'blue',
        width:hs(270),
        height:vs(400)
    },
    blurr:{
        height:vs(100),
        width:'98%',
        backgroundColor:'white',
        top:vs(-70),
        opacity:0.95
        
    },
    mText:{
        textAlign:'center',
        fontFamily:'Work',
        fontSize:ms(23),
        fontWeight:'bold',
        top:vs(-70)
    },
    btn:{
        backgroundColor:'#f66b0e',
        padding:20,
        width:hs(300),
        marginHorizontal:'auto',
        borderRadius:ms(20)
        
    }

})