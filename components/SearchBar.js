import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function SearchBar() {
  return (
    <View>
      <GooglePlacesAutocomplete 
      placeholder='Craving for Delicious Meal?'
      
      styles={{
        textInput: {
          backgroundColor: "#eee",
          borderRadius: 20,
          fontWeight: "700",
          marginTop: 7,
        },
        textInputContainer: {
          backgroundColor: "#eee",
          borderRadius: 50          
        },
      }}
      
      // renderLeftButton={ ()=>(
      //   // <View style={{ marginLeft: 0 }}>
      //   //   <Ionicons name="location-sharp" size={24} color="#000" />
      //     {/* <Text style={{color: 'black'}}>sedf</Text> */}
      //   // </View>
      // )}

      // renderRightButton ={()=>(
      //   // <View style={{backgroundColor: 'black'}}>
      //   //   <Text style={{color : 'red'}}>Search</Text>
      //   // </View>
      // )}
      />
    </View>
  )
}