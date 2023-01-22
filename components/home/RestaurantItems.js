import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const localRestaurants = [
    {
      name: "Beachside Bar",
      image_url:
        "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 4.5,
      id : 1
    },
    {
      name: "Benihana",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 3.7,
      id : 2
    },
    {
      name: "India's Grill",
      image_url:
        "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
      id : 3
    },    
    {
      name: "India's Grill",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
      id : 4
    },
    {
      name: "India's Grill",
      image_url:
        "https://as1.ftcdn.net/v2/jpg/01/12/25/74/1000_F_112257403_IE7hN2cUR6W9PZvSQAwDOUUT7S7fbeGk.jpg",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
      id : 5
    },
  ];



export default function RestaurantItems({navigation, ...props}) {
  return (
    <>
      {props.restaurantData.map((restaurant, index)=>(
          // IMPORTANT NOTE : (Below TouchableOpacity) This navigation prop is being transferred from the navigation.js file, where the loading and unloading of the components takes place, this has been passed from navigation.js --> App.js --> Home.js --> RestaurantItems.js and as we press on the touchable opacity we will then trigger the function that will then unmount Home component and then trigger the RestaurantDetails.js and at this point it can be used to show the custom data using the yelp api.
        <TouchableOpacity 
          key= {restaurant.id}
          activeOpacity={1} 
          style={{marginBottom :10}} 
          onPress={() =>    //IMPORTANT : Once we press the tile of restaurant image that is being shown, we are going to mount a whole new component, which means we are going to another component, now for this if we want to pass data from one component to the other we can pass it here in the form of object. Which will be stored in the variable known as route.
            navigation.navigate("RestaurantDetails", {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.review_count,
              rating: restaurant.rating,
              categories: restaurant.categories,
            })}
        >
            <View style={{padding : 10, marginTop : 10, backgroundColor : 'white'}} >      
                <RestaurantImage uri={restaurant.image_url}/>
                <RestaurantText name={restaurant.name} rating={restaurant.rating} distance={restaurant.distance}/>
            </View>
        </TouchableOpacity>
        ))
      }
    </>
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

const RestaurantText =(props)=>{
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
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
                <Text style={{ fontSize: 13, color: "gray" }}>{`${Math.ceil(props.distance)} m`}</Text>
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
                <Text>{props.rating}</Text>
            </View>            
        </View>
    )
}