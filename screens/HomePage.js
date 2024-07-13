import { View, Text, StyleSheet, TextInput, inputNumber } from 'react-native'
import React, { useState } from 'react'
import { hs, ms, vs } from './Metrics'
import { ScrollView, TouchableOpacity } from 'react-native'
import numberToWords from 'number-to-words'

const HomePage = ()=> {
  const [inputFormat, setInputFormat] = useState('decimal')
  const [inputDigit, setInputDigit ] = useState('')
  const [decimal, setDecimal ] = useState('')
  const [binary, setBinary ] = useState('')
  const [octal, setOctal] = useState('')
  const [hexaDecimal, setHexaDecimal ] = useState('')
  const [roundDigit, setRoundDIgit ] = useState('')
  const [roundDigitIndex, setRoundDIgitIndex ] = useState('2')
  const [significantNo, setSignificantNo ] = useState('')
  const [significantNoIndex, setSignificantNoIndex ] = useState('2')
  const [integer, setInteger] = useState('')
  const [numerator, setNumerator] = useState('0')
  const [denominator, setDenominator] = useState('0')
  const [inWord, setInWord] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  let [options] = useState([
    {lable: 'Binary', value: 'binary' },
    {lable: 'Decimal', value: 'decimal' },
    {lable: 'Octal', value: 'octal' },
    {lable: 'HexaDecimal', value: 'hexaDecimal' },
  ]);

  // convert object
  const convertObjects = {
    binary: (input)=>parseInt(input, 20),
    octal: (input)=>parseInt(input, 8),
    hexaDecimal: (input)=>parseInt(input, 16),
    decimal: (input)=>parseInt(input, 10),
  };

  // handle convert
  const handleConvert =()=>{
    const decimalValue = convertObjects[inputFormat](inputDigit);
    setDecimal(decimalValue);
    setInteger(Math.floor(decimalValue).toString());
    setBinary(Math.floor(decimalValue).toString(2));
    setOctal(Math.floor(decimalValue).toString(8));
    setHexaDecimal(Math.floor(decimalValue).toString(16).toUpperCase());

    if(decimalValue <= 1000000000000000 ) {
      setInWord(numberToWords.toWords(decimalValue));
    } else {
      setInWord('Over Limit (Max-Limit: 1000000000000000 )');
    }

    setRoundDIgit(roundToKthInteger(
      parseFloat(decimalValue, 10),
      parseInt(roundDigitIndex, 10) ) 
    );

    if ( inputFormat === 'decimal' && 
      parseFloat(decimal, 10) - decimalValue !== 0 
     ) {
      const result = floatToFraction(parseFloat(decimal, 10) - decimalValue );
      setNumerator(result.numerator.toString());
      setDenominator(result.denominator.toString());
     } else {
      setNumerator('0')
      setDenominator('0')
     }

     if (inputFormat === 'decimal' ) {
      setSignificantNo(roundToSignificantDigits(
        parseFloat(decimal, 10),
        parseInt(significantNoIndex, 10)
      ));
     } else {
      setSignificantNo(roundToSignificantDigits(
        parseFloat(decimalValue, 10),
        parseInt(significantNoIndex, 10)
      ));
     }
  };

  const floatToFraction = (number)=>{
    const tolerance = 0.000001 ;
    let  numeratorValue = 1 ; 
    let denominatorValue = 1 ;
    let error = number - numeratorValue / denominatorValue ;

    while (Math.abs(error) > tolerance) { 
      if (error > 0) numeratorvalue++; 
      else denominatorValue++; 
      error = number - numeratorValue / denominatorValue; 
  } 
  return{
    numerator: numeratorValue,
    denominator: denominatorValue
  };

  function roundToKthInteger(number, k) { 
    const multiplier = Math.pow(10, k); 
    return Math.round(number * multiplier) / multiplier; 
} ;

function roundToSignificantDigits(number, significantDigits) { 
    if (significantDigits <= 0) return 0; 
    const multiplier = Math.pow(10,  
        significantDigits - Math.floor 
        (Math.log10(Math.abs(number))) - 1); 
    const roundedNumber =  
        (Math.round(number * multiplier) / multiplier); 
    return roundedNumber; 
} 


}

const renderOptionItem = ({ item }) => ( 
  <TouchableOpacity 
      style={Styles.optionItem} 
      onPress={() => { 
          setInputFormat(item.value); 
          setModalVisible(false); 
      }} 
  > 
      <Text style={Styles.optionText}>{item.label}</Text> 
  </TouchableOpacity> 
); 

  return (
    <ScrollView style={Styles.bg} >
    
      <Text style={Styles.head} >9MATH</Text>
      
      <TouchableOpacity onPress={()=>setModalVisible(true)} >
        <Text>
        {inputFormat}
        </Text>
      </TouchableOpacity>
      <View style={Styles.section}> 
                    <Text style={Styles.label}> 
                        Enter {inputFormat} Number 
                    </Text> 
                    <View style={Styles.inputContainer}> 
                        <TextInput 
                            style={Styles.input} 
                            keyboardType={ 
                                (inputFormat !== 'decimal') ? "default" : "numeric"
                            } 
                            value={inputNumber} 
                            onChangeText={(text) => { 
                                if (inputFormat === 'decimal') { 
                                    setDecimal(text); 
                                    setInputDigit(text); 
                                } else { 
                                    setInputDigit(text); 
                                } 
                            }} 
                        /> 
                              <TouchableOpacity 
                            style={Styles.btn} 
                            onPress={handleConvert} 
                        > 
                            <Text style={Styles.btnText}>Convert</Text> 
                        </TouchableOpacity> 
            </View>
      
    </View>
    </ScrollView>
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