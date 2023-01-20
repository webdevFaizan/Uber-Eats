import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function SearchBar() {
  return (
    <View style={{ marginTop: 5, flexDirection: "row" }}>
      <GooglePlacesAutocomplete 
      placeholder='Craving for Delicious Meal?'
      
      styles={{
        textInput: {
          backgroundColor: "#eee",
          borderRadius: 0,
          fontWeight: "700",
          marginTop: 6,
        },
        textInputContainer: {
          backgroundColor: "#eee",
          borderRadius: 50,
          flexDirection: "row",
          alignItems: "center",
          marginRight: 10,
        },
      }}
      
      renderLeftButton={ ()=>(
        <View style={{ marginLeft: 10 }}>
          <Ionicons name="location-sharp" size={24} color="#000" />
          {/* <Text style={{color: 'black'}}>sedf</Text> */}
        </View>
      )}

      renderRightButton ={()=>(
        <View style={{ marginRight: 15 }}>
          <Text >Search</Text>
        </View>
      )}
      />
    </View>
  )
}