import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'

export default function MenuItems({foods}) {
    console.log(foods.length)
    return (
        <View >
                {foods.map((food,index)=>
                (<View  key={index}>
                    <View style={styles.menuItemStyle}>   
                        <View style={styles.menuItemStyle2}>
                            <View style={{width : '60%'}}>
                                <FoodInfo price={food.price} description={food.description} title={food.title}/>
                            </View>
                            <View style={{width : '40%', flexDirection : 'row-reverse'}}>
                                <FoodImage url={food.image}/>                        
                            </View>
                        </View>
                    </View>
                 </View>
                ))
                }            
        </View>
    )
};

const FoodImage =({url}) =>{
    return (
        <Image source={{uri : url}} style={{width : 100, height :100, borderRadius : 25}} />
    )
}

const FoodInfo =({title, price, description}) =>{
    return (
        <View>
            <Text>{title}</Text>
            <Text>{description}</Text>
            <Text>{price}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    menuItemStyle: {
      flexDirection: "column",
      justifyContent: "space-between",
      padding: 20,
      alignItems : 'center', 
      borderBottomColor : '#190000', 
      borderBottomWidth : 2
    },

    menuItemStyle2: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,        
        width : '100%',
        alignItems : 'center',         
      },
  
    titleStyle: {
      fontSize: 19,
      fontWeight: "600",
    },
  });