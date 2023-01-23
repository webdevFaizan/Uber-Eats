import { View, Text, SafeAreaView, SafeAreaViewBase, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import About from '../components/restaurantDetails/About'
import { Divider } from 'react-native-elements';
import ViewCart from '../components/restaurantDetails/ViewCart';

const foods = [
    {
      title: "Lasagna",
      description: "With butter lettuce, tomato and sauce bechamel",
      price: "$13.50",
      image:
        "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
    },
    {
      title: "Tandoori Chicken",
      description:
        "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
      price: "$19.20",
      image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
    },
    {
      title: "Chilaquiles",
      description:
        "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
      price: "$14.50",
      image:
        "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
    },
    {
      title: "Chicken Caesar Salad",
      description:
        "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
      price: "$21.50",
      image:
        "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
    },
    {
      title: "Lasagna",
      description: "With butter lettuce, tomato and sauce bechamel",
      price: "$13.50",
      image:
        "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
    },
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
          "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
      },
      {
        title: "Tandoori Chicken",
        description:
          "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
        price: "$19.20",
        image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
      },
      {
        title: "Chilaquiles",
        description:
          "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
        price: "$14.50",
        image:
          "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
      },
  ];
  

export default function RestaurantDetails({route}){
  return (
    <>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <About foods={foods} route={route}/>
        {/* <Divider width={3}/> */}
      </SafeAreaView>
      <View>
        <ViewCart/>   
        {/* IMPORTANT : This view cart component had to be kept on the top of all the other elements, and the position had to be defined in respect to the whole screen, this is why flex =1 had to be kept, and the position of this component had to be absolute, so that no matter the scrolling component, the view cart remained at its designated place.*/}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
      flex: 1,
      backgroundColor: "#eee",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
  });