import { View, Text, TouchableOpacity  } from 'react-native'
import {React,useEffect,useState} from 'react';

export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState('Delivery');   
    useEffect(() => {
      console.log(activeTab);    
    }, [activeTab])
    
    
    return (
        // The difference between alignSelf and alignItems is that it aligns itself while alignItems aligns it children.
        <View style={{flexDirection : 'row', alignSelf: 'center', paddingBottom : 12}}>
          <HeaderButton text='Delivery' activeTab={activeTab} backgroundColor= 'black' color= 'white' setActiveTab={setActiveTab}/>
          <HeaderButton text='Pickup' activeTab={activeTab} backgroundColor= 'white' color= 'black' setActiveTab={setActiveTab}/>
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