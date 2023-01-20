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
export default function Categories() {
  return (

    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {
        items.map((item)=>{
          return(
              <View style={{marginHorizontal : 10, paddingVertical : 10, alignSelf:'center'} } key={item.id}>
                <Image 
                  source={item.image} 
                  style={{
                    width:50, 
                    height:43
                  }}
                />
                <Text >{item.text}</Text>
              </View>
          )
        })
      }
    </ScrollView>
    </View>
  )
}

//IMPORTANT : The following function is totally working, but FlatList is not used furthur except experimentation, the reason for this is that in Video it is not being taught as such.
function Categories2() {  //This is just a dummy function, which will help us understand the use of FlatList.
  return (
    < FlatList
      showsHorizontalScrollIndicator={false}
      horizontal  //This will tell in which direction the list is going to be, this parameter is same as the ScrollView.
      data={items}  //This is the list of all the elements that has to be added to the Flatlist, and the renderItem method will tell how to add those.
      alwaysBounceHorzontal= {true}
      renderItem={(itemsObject)=>{    //ItemObject is literally an object, which will contain the data item in the form of an object and in that there is image and text which we require to show, and the key extractor will be really helpful, since usually these kind of data are recieved with the help of API, and the API usually have a unique tag of id which could be used as key.
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