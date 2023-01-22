import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'

export default function MenuItems() {
    return (
        <View style={{flexDirection : 'row-reverse', justifyContent : 'space-between', padding : 25, alignItems : 'center', borderBottomColor : '#190000', borderBottomWidth : 2}}>
            {/* <Text>MenuItems</Text> */}
            <FoodImage/>
            <FoodInfo/>
        </View>
    )
};

const FoodImage =() =>{
    return (
        <Image source={{uri : "https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Crispy-Chicken-Burger-tall-FS-4512.webp"}} style={{width : 100, height :100}} />
    )
}

const FoodInfo =() =>{
    return (
        <View>
            <Text>Name of food items</Text>
            <Text>Ratings of food items</Text>
        </View>
    )
}