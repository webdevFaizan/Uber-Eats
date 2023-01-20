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
        <RestaurantItems uri="https://as1.ftcdn.net/v2/jpg/01/27/65/58/1000_F_127655811_iv0Vf94XxAy7hneGXka6C1kaT8jAe4qC.jpg"/>
        <RestaurantItems uri="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <RestaurantItems uri="https://as1.ftcdn.net/v2/jpg/01/12/25/74/1000_F_112257403_IE7hN2cUR6W9PZvSQAwDOUUT7S7fbeGk.jpg"/>
        <RestaurantItems uri="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <RestaurantItems uri="https://as1.ftcdn.net/v2/jpg/01/12/25/74/1000_F_112257403_IE7hN2cUR6W9PZvSQAwDOUUT7S7fbeGk.jpg"/>
        <RestaurantItems uri="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <RestaurantItems uri="https://as1.ftcdn.net/v2/jpg/01/27/65/58/1000_F_127655811_iv0Vf94XxAy7hneGXka6C1kaT8jAe4qC.jpg"/>
        <RestaurantItems uri="https://as1.ftcdn.net/v2/jpg/01/12/25/74/1000_F_112257403_IE7hN2cUR6W9PZvSQAwDOUUT7S7fbeGk.jpg"/>
        <RestaurantItems uri="https://as1.ftcdn.net/v2/jpg/01/27/65/58/1000_F_127655811_iv0Vf94XxAy7hneGXka6C1kaT8jAe4qC.jpg"/>        
      </ScrollView>
    </>
  )
}