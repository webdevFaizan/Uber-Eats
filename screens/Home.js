import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItems from '../components/RestaurantItems'

export default function Home() {
  return (
    <>
      <View style={{ backgroundColor: 'white', padding : 5, paddingHorizontal : 12}}>        
        <HeaderTabs/>
        <SearchBar/>       
      </View>
        <Categories/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RestaurantItems />        
      </ScrollView>
    </>
  )
}