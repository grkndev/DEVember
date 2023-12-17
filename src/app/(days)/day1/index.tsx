import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{title:'Day 1'}} />
      <Text style={{ fontSize: 100, fontFamily: "Amatic" }}>day1</Text>
    </View>
  )
}

export default DayDetailsScreen