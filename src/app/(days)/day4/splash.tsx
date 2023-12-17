import { View, Text, Button } from 'react-native'
import React, { useRef } from 'react'
import LottieView from 'lottie-react-native';
import { Stack } from 'expo-router';
export default function SplashScreen() {
    const animation = useRef<LottieView>(null)
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center", backgroundColor:'#000'}}>
      <Stack.Screen options={{headerShown:false}} />
     <LottieView
        autoPlay
        ref={animation}
        style={{
          width: '80%',
          maxWidth: 400,
          // height: 200,
          // backgroundColor: '#000',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('@assets/lottie/netflix.json')}
      />
    
    </View>
  )
}