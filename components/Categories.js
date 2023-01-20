import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react';

const items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../assets/images/desserts.png"),
    text: "Desserts",
  },
];

export default function Categories() {
  return (
    <ScrollView horizontal>
      {
        items.map((item)=>{
          return(
              <View style={{marginHorizontal : 10, paddingVertical : 10}}>
                <Image 
                  source={item.image} 
                  style={{
                    width:50, 
                    height:43
                  }}
                />
                <Text>{item.text}</Text>
              </View>
          )
        })
      }
      {/* <View style={{marginHorizontal : 10, paddingVertical : 10}}>
        <Image 
          source={items[0].image} 
          style={{
            width:50, 
            height:43
          }}
        />
        <Text>{items[0].text}</Text>
      </View> */}
      
    </ScrollView>
  )
}