// IMPORTANT : The most important point about this js file is that it is a template created to handle the navigation of the pages from Home.js to RestaurantDetials.js page, this is done in order to switch the pages.

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import RestaurantDetails from "./screens/RestaurantDetails";


export default function RootNavigation(){
    const Stack = createStackNavigator();


    const screenOptions = {
        headerShown : false
    };
    const jhdf=3;

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                <Stack.Screen name="Home" component = {Home}/>
                <Stack.Screen name="RestaurantDetails" component = {RestaurantDetails}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}