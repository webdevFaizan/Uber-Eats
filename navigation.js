// IMPORTANT : The most important point about this js file is that it is a template created to handle the navigation of the pages from Home.js to RestaurantDetials.js page, this is done in order to switch the pages.

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import RestaurantDetails from "./screens/RestaurantDetails";

import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './redux/store';


const store = configureStore();

export default function RootNavigation(){
    const Stack = createStackNavigator();


    const screenOptions = {
        headerShown : false
    };
    
    return (
        <ReduxProvider store={store}>
            <NavigationContainer>   
                {/* IMPORTANT : This navigation container is like the router for the web, using the react-router-dom, here we are able to Navigate to different routes having amount and unmount. This is just like a template, so you do not need to worry even if you forget it. */}
                <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                    <Stack.Screen name="Home" component = {Home}/>
                    <Stack.Screen name="RestaurantDetails" component = {RestaurantDetails}/>
                </Stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>
    )
}