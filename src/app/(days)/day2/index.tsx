import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const day2 = () => {
  return (
    <View>
      <Stack.Screen options={{title:'Day 2'}} />
      <Text>day2</Text>
    </View>
  )
}

export default day2