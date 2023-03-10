
import { View, Text, StyleSheet, ScrollView, FlatList, Modal } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function MenuItems({foods, restaurantName}) {

    


    const items = useSelector((state)=>state.cartReducer.selectedItems.items);

    //IMPORTANT : The following function is going to take the food item and in Production code, it will take the id of the food item and then it will manually check the presence of the food id in the global state, and if it is found then it will return true for that case and will inturn by default create a checkbox, so that even if we go back and forth in the app the selected item will still stay selected in the global store so that user does not need to select it agian and get a good user experience.
    const isFoodInCart=(food)=>(
        Boolean(items.find((item)=>item.title===food.title))
    )

    const dispatch = useDispatch();     //Hooks can only be saftly accessed inside the function that is being exported.
    // IMPORTANT : This function here is the function that will run as soon as we click on the checkbox, and as soon as it runs, it will dispatch the contents to the store, and the contents will be added in the store.
    const selectedItem = (item) =>{
        dispatch({
            type : 'ADD_TO_CART',
            payload : {
                food : item.food,
                restaurantName : item.restaurantName,
                checkBoxValue : item.checkBoxValue
            }
        })
    }

    console.log(foods.length)
    return (
        <View >
                {foods.map((food,index)=>
                (<View  key={index}>
                    <View style={styles.menuItemStyle}>   
                        <View style={styles.menuItemStyle2}>
                            <View>
                                <BouncyCheckbox
                                    iconStyle={{ borderColor: "lightgray"}}
                                    fillColor="black"
                                    isChecked = {isFoodInCart(food)}    //IMPORTANT : Now this checkbox selection has made the food item selection like a two way communication, now when we select the food items it get updated in the store, and when the item is already selected in the store when we refresh the page or come back to this page it will automatically get selected as it is already present in the store.
                                    onPress={(checkBoxValue)=>selectedItem({food, restaurantName, checkBoxValue})}  //The onPress callback will have a param to be passed that consists of checkboxValue, if it is on then it will pass true.
                                    
                                />
                            </View>
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
        <Image source={{uri : url}} style={{width : 140, height :120, borderRadius : 25, paddingLeft : 4}} />
    )
}

const FoodInfo =({title, price, description}) =>{
    return (
        <View>
            <Text style={{fontSize : 15, fontWeight : '900'}}>{title}</Text>
            <Text>{description}</Text>
            <Text style={{paddingTop : 9}}>{price}</Text>
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
        // margin: 20,        
        width : '100%',
        alignItems : 'center',         
      },
  
    titleStyle: {
      fontSize: 19,
      fontWeight: "600",
    },
  });