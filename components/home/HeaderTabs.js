import { View, Text, TouchableOpacity  } from 'react-native'
import {React,useEffect,useState} from 'react';

export default function HeaderTabs(props) {
    
    return (
        // The difference between alignSelf and alignItems is that it aligns itself while alignItems aligns it children.
        <View style={
            {
            borderBottomColor: '#eee',  
            borderBottomWidth: 2, 
            flexDirection : 'row', 
            alignSelf: 'center', 
            paddingVertical : 4
            }}
        >
          <HeaderButton 
            text='Delivery' 
            activeTab={props.activeTab} 
            backgroundColor= 'black' 
            color= 'white' 
            setActiveTab={props.setActiveTab}
            />
          <HeaderButton 
            text='Pickup' 
            activeTab={props.activeTab} 
            backgroundColor= 'white' 
            color= 'black' 
            setActiveTab={props.setActiveTab}
        />
        </View>
      );
    }

const HeaderButton =(props)=>{
    return (
        //IMPORTANT : This touchableOpacity will atuomatically add the opacity when we touch the buttons, and like it was said, you could create your buttons from scratch, this is how we build customised buttons.
    <TouchableOpacity style={{
        backgroundColor : props.activeTab===props.text?'black':'white', 
        paddingVertical : 6,
        paddingHorizontal  : 16,
        borderRadius : 35,
        marginHorizontal : 7,
        borderColor : props.activeTab===props.text?'white':'black',
        borderWidth : 1
    }}
        onPress = {()=>{
            props.setActiveTab(props.text);
        }}
    >
        <Text style={{color : props.activeTab===props.text?'white':'black', fontWeight : '900', fontSize : 18}}>{props.text}</Text>
    </TouchableOpacity>
    )
}