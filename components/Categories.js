import { View, Text, ScrollView, Image, FlatList } from 'react-native'
import React from 'react';

const items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "Pick-up",
    id : "1"
  },
  {
    image: require("../assets/images/soft-drink.png"),
    text: "Soft Drinks",
    id : "2"
  },
  {
    image: require("../assets/images/bread.png"),
    text: "Bakery Items",
    id : "3"
  },
  {
    image: require("../assets/images/fast-food.png"),
    text: "Fast Foods",
    id : "4"
  },
  {
    image: require("../assets/images/deals.png"),
    text: "Deals",
    id : "5"
  },
  {
    image: require("../assets/images/coffee.png"),
    text: "Coffee & Tea",
    id : "6"
  },
  {
    image: require("../assets/images/desserts.png"),
    text: "Desserts",
    id : "7"
  },
];


// IMPORTANT : The following function has been implemented using scrollView, but the problem with scroll view is that it is unoptimised as well as the key to the value is not given automatically. This is why in the next implementation of the Flatlist I am going to implement Flatlist.
function Categories2() {
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
    </ScrollView>
  )
}


export default function Categories() {
  return (
    < FlatList
      horizontal
      data={items}
      alwaysBounceHorzontal= {true}
      renderItem={(itemsObject)=>{
        return (
          <View style={{marginHorizontal : 10, paddingVertical : 10}}> 
                <Image 
                  source={itemsObject.item.image} 
                  style={{
                    width:50, 
                    height:43
                  }}
                />               
                <Text>{itemsObject.item.text}</Text>
                {/* <Text>Heelo</Text> */}
          </View>
        )
      }}
      keyExtractor = {(item,index)=>{return item.id}} 

    />
  )
}