import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function RestaurantItems(props) {
  return (
    <View style={{paddingHorizontal : 10, marginTop : 10}}>
      {/* <Text>RestaurantItems</Text> */}
      <RestaurantImage uri={props.uri}/>
      <RestaurantText/>
    </View>
  )
}

const RestaurantImage = (props)=>{
    return (
        <View>
            <Image 
            source={{uri : props.uri, 
            width : "100%", 
            height : 200, }}/>
            {/* <Text>Hello</Text> */}
            <TouchableOpacity style={{position : 'absolute', top: 5, right:5}}>
                <MaterialCommunityIcons name='heart-outline' size={39} color='white'/>
            </TouchableOpacity>
        </View>
    )
}

const RestaurantText =()=>{
    return (
        <View
            style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
            }}
        >
            <View style={{flexDirection : 'column'}}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>Extra Cheeze Margretta Pizza</Text>
                <Text style={{ fontSize: 13, color: "gray" }}>30-45 • min</Text>
            </View>
            <View
            style={{
                backgroundColor: "#eee",
                height: 30,
                width: 30,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 15,
            }}
            >
                <Text>4.5</Text>
            </View>            
        </View>
    )
}