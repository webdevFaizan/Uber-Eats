import { View, Text, Image } from 'react-native'
import React from 'react'

export default function RestaurantItems() {
  return (
    <View style={{paddingHorizontal : 10, marginTop : 10}}>
      {/* <Text>RestaurantItems</Text> */}
      <RestaurantImage/>
      <RestaurantText/>
    </View>
  )
}

const RestaurantImage = ()=>{
    return (
        <View>
            <Image 
            source={{uri : "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
            width : "100%", 
            height : 200, }}/>
            {/* <Text>Hello</Text> */}
        </View>
    )
}

const RestaurantText =()=>{
    return (
        <View style={{flexDirection : 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection : 'column'}}>
                <Text>Meal Name</Text>
                <Text>Delivery Time</Text>
            </View>
            <View>
                <Text>Rating</Text>
            </View>            
        </View>
    )
}