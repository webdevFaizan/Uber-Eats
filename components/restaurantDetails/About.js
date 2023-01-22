import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements';


const image = "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const name = "Restaurant Image data";
const description = "This delicious item."

export default function About(props) {    
    return (
      <View>
        <RestaurantImage image={image} />
        <RestaurantName name={name} />
        <RestaurantDescription description={description} />
      </View>
    );
  }

const RestaurantImage =({image}) =>{
    return (
        <Image source={{ uri: image }} style={{ width: "100%", height: 180 }} />
    )
}

const RestaurantName =({name})=>{
    return (
        <Text>{name}</Text>
    )
}

const RestaurantDescription =({description})=>{
    return (
        <Text>{description}</Text>
    )
}