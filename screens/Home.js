import { View, Text } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'

export default function Home() {
  return (
    <View
    style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home</Text>
      <HeaderTabs/>
    </View>
  )
}