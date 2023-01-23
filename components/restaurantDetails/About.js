import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Divider, Image } from 'react-native-elements';
import MenuItems from './MenuItems';
import ViewCart from './ViewCart';

const yelpRestaurantInfo =() =>{

}



const image = "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const name = "Restaurant Image data";
const description = "This delicious item."

export default function About(props) {    
    const { name, image, price, reviews, rating, categories } = props.route.params; //The data in the props.route.params is being sent while the unloading of the component happens from the Home.js component, the data sent from over there will be used when a new component is being loaded and thus there  is a connection between two different component loading and unloading.

    const formattedCategories = categories.map((cat) => cat.title).join(" • ");

    const description = `${formattedCategories} ${
        price ? " • " + price : ""
    } • 🎫 • ${rating} ⭐ (${reviews}+)`;
    return (
    <ScrollView>
      <View>
        <RestaurantImage image={image} />
        <RestaurantName name={name} />
        <RestaurantDescription description={description} />
        <Divider width={3}/>
      </View>
      <View>
        <MenuItems foods ={props.foods}/>
        
      </View>
    </ScrollView>
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


