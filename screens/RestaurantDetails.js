import { View, Text } from 'react-native'
import React from 'react'
import About from '../components/restaurantDetails/About'
import { Divider } from 'react-native-elements';

export default function restaurantDetails(){
  return (
    <View>
      <About/>
      {/* <Divider width={3}/> */}
    </View>
  )
}