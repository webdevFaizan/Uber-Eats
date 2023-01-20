import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'

export default function Home() {
  return (
    <View style={{borderBottomColor: '#eee', flex: 1, borderBottomWidth: 2, padding : 15, backgroundColor: 'white'}}>
      {/* <Text>Home</Text> */}
      <HeaderTabs/>
      <SearchBar/>
    </View>
  )
}