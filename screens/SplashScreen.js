import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { hs, ms, vs } from './Metrics'
import {useFonts} from 'expo-font'
import { SafeAreaView } from 'react-native-safe-area-context'


const SplashScreen= ({navigation})=> {


    useFonts({Work:require('../assets/WorkSans.ttf')})
    
    return (
      <View style={Styles.bg} >
        <TouchableOpacity onPress={()=>navigation.navigate('HomePage')} style={Styles.skp} >
        <Text style={Styles.skpTxt} > Skip </Text>
        </TouchableOpacity>
        <View style={Styles.proto} >
            <Image style={Styles.protoImg} source={require('../assets/apple.png')}  />
        </View>
        <View style={Styles.blurr}  />

        <View>
            <Text style={Styles.mText} >
                Introducing Facial {'\n'} Recognition Technology
            </Text>
            <Text style={{textAlign:'center', top:vs(-50) }} >
                Best in class attendance marking tech for secure tracking
            </Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('SplashScreen1')} style={Styles.btn} >
            <Text style={{color:'#white', textAlign:'center'}} >
                Get Started
            </Text>
        </TouchableOpacity>
       <TouchableOpacity onPress={()=>navigation.navigate('SplashScreen1')} >
       <Text style={{display:'flex', flexDirection:'row-reverse', right:hs(-320), fontSize:ms(30), marginTop:vs(20)}} >
        ➔
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
        // backgroundColor:'yellow'
    },
    protoImg:{
        marginHorizontal:'auto',
        // backgroundColor:'blue',
        width:hs(270),
        height:vs(400)
    },
    blurr:{
        height:vs(100),
        width:hs(350),
        backgroundColor:'#fafafa',
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